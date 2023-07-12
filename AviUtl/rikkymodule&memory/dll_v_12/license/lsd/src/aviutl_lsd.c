#include <stdlib.h>
#include "lua.h"
#include "lualib.h"
#include "lauxlib.h"

typedef struct {
	unsigned char b, g, r, a;
} PIXEL_A;

int aviutl_lsd(lua_State *L, PIXEL_A *pixel, int w, int h)
{
	double *image = (double *)malloc(sizeof(double) * w * h);
	if(!image)
	{
		return 0;
	}
	int i, n;
	int bool = 0;
	int luatop = lua_gettop(L);
	if(2 < luatop && lua_type(L, 3) == LUA_TBOOLEAN)
	{
		bool = lua_toboolean(L, 3);
	}
	double a, r, g, b, u;
	u = 0;
	if(1 < luatop && lua_type(L, 2) == LUA_TNUMBER)
	{
		int color = lua_tointeger(L, 2);
		if(0 < color)
		{
			r = (color >> 16) & 0xFF;
			g = (color >> 8) & 0xFF;
			b = color & 0xFF;
			u = (double)0.299 * r + (double)0.587 * g + (double)0.114 * b;
		}
	}
	for(i = w * h - 1; -1 < i; --i)
	{
		a = pixel[i].a;
		r = (double)0.299 * pixel[i].r;
		g = (double)0.587 * pixel[i].g;
		b = (double)0.114 * pixel[i].b;
		image[i] = u + (r + g + b - u) * a / 255;
	}
	double scale = lua_tonumber(L, 1) * 0.01;
	if(scale <= 0) scale = 0.8;
	double *out = (double *)lsd_scale(&n, image, w, h, scale);
	if(n)
	{
		lua_newtable(L);
		int s = 0;
		if(bool)
		{
			double haw = (double)w * 0.5;
			double hah = (double)h * 0.5;
			for(i = 0; i < n; ++i, s += 7)
			{
				lua_newtable(L);
				lua_pushnumber(L, out[s    ] - haw);
				lua_setfield(L, -2, "x0");
				lua_pushnumber(L, out[s + 1] - hah);
				lua_setfield(L, -2, "y0");
				lua_pushnumber(L, out[s + 2] - haw);
				lua_setfield(L, -2, "x1");
				lua_pushnumber(L, out[s + 3] - hah);
				lua_setfield(L, -2, "y1");
				lua_rawseti(L, -2, i + 1);
			}
		}
		else
		{
			for(i = 0; i < n; ++i, s += 7)
			{
				lua_newtable(L);
				lua_pushnumber(L, out[s    ]);
				lua_setfield(L, -2, "x0");
				lua_pushnumber(L, out[s + 1]);
				lua_setfield(L, -2, "y0");
				lua_pushnumber(L, out[s + 2]);
				lua_setfield(L, -2, "x1");
				lua_pushnumber(L, out[s + 3]);
				lua_setfield(L, -2, "y1");
				lua_rawseti(L, -2, i + 1);
			}
		}
	}
	free(out);
	free(image);
	return n;
}