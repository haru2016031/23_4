---------------------------------------------------------------------------------------------------
AviSynth plug-in L-SMASH Source r940 release1 [2020/01/05]
---------------------------------------------------------------------------------------------------

�y�T�v�z
L-SMASH Source �́Amuken���� L-SMASH Works �J���̈�Ƃ��Ď�����i�߂Ă��� OSS �ł���A
MP4/MOV/QT/3gp/3g2/F4V/M4A ���� L-SMASH �Ή��R���e�i�Ɋi�[���ꂽ�f���E�����X�g���[����
AviSynth �œǂݍ��ނ��߂̃v���O�C���ł��B
�R�[�f�b�N�̃f�R�[�h�� ffmpeg �� Libav ���󂯎����܂��i���v���O�C���� ffmpeg ���g�p�j�B

r416 ��� LWLibavVideoSource() ����� LWLibavAudioSource() ���ǉ�����A ffms ���g�p�����Ƃ�
Libav/ffmpeg ���T�|�[�g����R���e�i�E�R�[�f�b�N�̓ǂݍ��݂��\�ƂȂ�܂����B



===================================================================================================

�y�Ή��R���e�i�t�H�[�}�b�g�z
	�Ή��R���e�i�E�R�[�f�b�N�͉��L�� ffmpeg �������������������B
	
	FFmpeg Supported File Formats, Codecs or Features
	https://www.ffmpeg.org/general.html#Supported-File-Formats_002c-Codecs-or-Features
	
	�܂��A�ȉ��̊O�����C�u�����ɂ��g�����s���Ă��܂��B

		�EAOM AV1 Codec Library �ɂ�� AV1 �̃f�R�[�h
		  https://aomedia.googlesource.com/aom/

		�EGame Music Emu �ɂ��Q�[�������t�@�C���̃f�R�[�h�i�Ή��@��E�����͉��L�T�C�g�Q�Ƃ̂��Ɓj
		  https://bitbucket.org/mpyne/game-music-emu/wiki/Home
		  		AviUtl �Őݒ肵�Ă���ő�t���[�����܂Ń��[�v���ĉ�����W�J���܂��̂�
		  		�ő�t���[���������قǓW�J�Ɏ��Ԃ�������܂��B
		    	�K�v�Ȏ��Ԓ��ɍ��킹�čő�t���[�������Đݒ肵�ǂݍ��ނ��Ƃ��������߂��܂��B



===================================================================================================

�y�����z

LSMASHSource.dll �� AviSynth �� plugins �t�H���_�ɃR�s�[�B
�܂��͔C�ӂ̃f�B���N�g���ɒu���ALoadPlugin �œǂݍ��݂܂��B

	��)
	LoadPlugin("d:\hoge\LSMASHSource.dll")

64bit �Ńv���O�C���� x64 �t�H���_���ɂ���AAviSynth 64bit �ł� AviSynth+ �ɂė��p�\�ł��B
AviSynth �� plugins64 �t�H���_�܂��� AviSynth+ �� plugins64+ �t�H���_�ɃR�s�[���Ă��g�����������B
����ɂ��Aavs �� 64bit �ŃG���R�[�_�E�A�v���P�[�V�����ƃ_�C���N�g�Ƀ����N�ł��A
64bit OS ��� 32bit �o�C�i���g�p���� WOW64 �I�[�o�[�w�b�h�ɂ��኱�̏������x�ቺ(�������x)������ł��܂��B



===================================================================================================

�yAviSynth�X�N���v�g�̏����z
�f���ǂݍ��݂Ɖ����ǂݍ��݂�������Ă���A���ꂼ��̎w�肪�K�v�ł��B



���f���ǂݍ��݂̏��� (L-SMASH���T�|�[�g����R���e�i�̓ǂݍ��݁BMP4��MOV�Ȃ�)

LSMASHVideoSource("source file", track, threads, seek_threshold, seek_mode, dr, fpsnum, fpsden, stacked, format, decoder)

	"source file"
		�ǂݍ��މf���t�@�C�����w�肵�܂��B

	track
		�f���R���e�i����ǂݍ��ރg���b�N�i���o�[���w�肵�܂��B
		=0   ��������B�ŏ��Ɍ������g���b�N�̉f����ǂݍ��݂܂��i�����j
		=n   �C�ӂ̃g���b�N�i���o�[(n)���w�肵�ēǂݍ��݂܂�

	threads
		��������X���b�h�����w�肵�܂��B
		=0   ��������i�����j
		=n   �C�ӂ̃X���b�h��(n)���w�肵�ď������܂�

	seek_threshold
		���Ԏ��̖��������Ƀ����_���A�N�Z�X�i�V�[�N�j�����t���[���Ԋu���ݒ�͈͓��ł���΁A
		�L���b�V������Ă���t���[�����瑦�f�R�[�h�����ė]���ȏ������Ȃ��܂��B
		�͈͂��L���������I�s�N�`������f�R�[�h�������������A�ނ���x���Ȃ�P�[�X��
		���邽�߁A���X�ɐݒ肷��ق����ǂ��ł��傤�B
		�ҏW���ȂǁA�����_���ȃV�[�N���v�������V�[���Ŗ𗧂\��������܂��B
		=n   seek_threshold ��L��������t���[����(n)���w�肵�܂��B�����l��10

	seek_mode
		�V�[�N���̏������@���w�肵�܂��B
		=0   Normal���[�h�B3��ڂ̃V�[�N���s����Unsafe���[�h��3��ڂƓ����t���[������
	         �f�R�[�h�����s���A����ł��ʖڂȏꍇ�͑O�̃t���[���̃R�s�[�𐶐����܂��i�����j
		=1   Unsafe���[�h�B1��ڂ̃G���[�őO�̃t���[���̃R�s�[�𐶐����܂�
		=2   Aggressive���[�h�B�V�[�N���s�i�G���[�j�ōĎ��s����؂��܂���B�ȈՊm�F�����B

	dr
		Libav/ffmpeg(libavcodec) �� custom get_buffer() ���g�p�����_�C���N�g�ǂݍ��݂����܂��B
		dr ���g�p���Ȃ��ꍇ�Ɣ�r���Ė�50%�O��̃X�s�[�h�A�b�v�������imuken���k�j�B
		�������A�C���^���[�X�f���ŏc32�̔{���f�R�[�h�����̂܂܁AH.264�̏ꍇ�͏c2���C����
		�t������邽�߁A�X�g���[�����\�����ׂ��𑜓x�ɂ���ꍇ�́A�ǂݍ��݌�̉f���𑜓x��
		�m�F�̂����A�K�v�Ƃ���� crop �������{���Ă��������B
		
		=true    �_�C���N�g�ǂݍ��݂�L�������܂�
		=false   �_�C���N�g�ǂݍ��݂𖳌������܂��i�f�t�H���g�B�]���̏����Ɠ����j

	fpsnum(�f�t�H���g 0)
	fpsden(�f�t�H���g 1)
		VFR->CFR �ϊ�������ۂ�CFR�̃t���[�����[�g��fpsnum(���q)�Afpsden(����)�Ƃ���
		���ꂼ��w�肵�܂��B
		�ϊ��̓t���[���x�[�X�ōs���A�t���[���̐������E�폜�ɂ���Ďw�肳�ꂽ
		�t���[�����[�g�ɒ�������܂��B
		
		��)
		fpsnum=60000, fpsden=1001	# 59.94fps��CFR�o��

	stacked 
		AviSynth �� high bit-depth �ɑΉ����܂��B
		�������A���̃��[�h��L��������� dr�i�_�C���N�g�ǂݍ��݁j�͎g�p�ł��܂���B
		
		=true    high bit-depth ��L�������܂�
		=false   high bit-depth �𖳌������܂��i�f�t�H���g�j

	format
		�s�N�Z���t�H�[�}�b�g���w�肵�܂��B
		�f�t�H���g�ł͓ǂݍ��񂾉f���X�g���[���̃t�H�[�}�b�g�����̂܂܏o�͂��܂��B
		�������Adr ���[�h�̎g�p�ŏo�͂����s�N�Z���t�H�[�}�b�g�����߂��Ă���ꍇ�A
		format �w��͋@�\���܂���B
		
		"Y8"
		"RGB24"
		"RGB32"
		"YUY2"
		"YUV420P8"
		"YUV422P8"
		"YUV444P8"
		"YUV410P8"
		"YUV411P8"
		"YUV420P9"
		"YUV422P9"
		"YUV444P9"
		"YUV420P10"
		"YUV422P10"
		"YUV444P10"
		"YUV420P12" (ffmpeg only)
		"YUV422P12" (ffmpeg only)
		"YUV444P12" (ffmpeg only)
		"YUV420P14" (ffmpeg only)
		"YUV422P14" (ffmpeg only)
		"YUV444P14" (ffmpeg only)
		"YUV420P16"
		"YUV422P16"
		"YUV444P16"

	decoder
		�D��I�Ɏg�p�������f�R�[�_�����L�q���܂��B
		�\�L�� libavcodec �� decoder name �ɑ���A�ꗗ�� decoder_name.txt �ɋL�ڂ��Ă���܂��̂ł�������Q�Ƃ��Ă��������B
		�J���}��؂�ŕ����̃f�R�[�_���w��ł��A�L�q�����擪�̃f�R�[�_����D��I�Ɏg�p�����݂܂��B
		
		��1)
			h264_cuvid,h264
		
			�ŏ��� NVIDIA GPU ���T�|�[�g���� Video Decoder(CUVID) �ɂ�� H.264(MPEG-4 AVC)�f�R�[�_���g�p�B
			���̏������s�\�ł������ꍇ��2�Ԗڂ� ffmpeg libavcodec �Ɏ�������Ă��� H.264 �f�R�[�_���g�p���܂��B
		
		��2)
			mpeg2_qsv,mpeg2video
		
			��2�ł́A�܂� Intel QSV �ɂ�� MPEG-2 �̃f�R�[�h�����s���A
			���ꂪ�s�\�ł������ꍇ�� ffmpeg libavcodec �Ɏ�������Ă��� MPEG-2 �f�R�[�_���g�p���܂��B
		
		��3)
			hevc_cuvid,hevc
		
			HEVC(H.265)�� NVIDIA Video Decoder(CUVID)�Ńf�R�[�h�����݁A
			CUVID �������� ffmpeg libavcodec �ɂ�� HEVC �f�R�[�_���g�p���܂��B
	
	��ɓ���R�[�f�b�N�̃f�R�[�_������������̂ɑ΂��ėL���ȋ@�\�ł���A
	�ΏۂƂȂ�f�R�[�_���ЂƂ�������������A�ǂݍ������Ƃ��Ă��铮��E�����t�@�C���̃R�[�f�b�N���s���ȏꍇ�́A
	���w��ɂ�鎩�����ʂ��]�܂����ł��傤�B



�������ǂݍ��݂̏��� (L-SMASH���T�|�[�g����R���e�i�̓ǂݍ��݁BMP4��M4A�Ȃ�)

LSMASHAudioSource("source file", track, skip_priming, layout, rate, decoder)

	"source file"
		�ǂݍ��މ����t�@�C�����w�肵�܂��B�܂��́A�f���Ɖ�����mux���ꂽ�t�@�C�����w�肵�܂��B

	track
		������ǂݍ��ރg���b�N�i���o�[���w�肵�܂��B
		=0   ��������B�ŏ��Ɍ������g���b�N�̉�����ǂݍ��݂܂��i�����j
		=n   �C�ӂ̃g���b�N�i���o�[(n)���w�肵�ēǂݍ��݂܂�

	skip_priming
		�R���e�i�� edit list �� encoder delay ���L����Ă���ꍇ�A����Ɋ�Â���
		������ priming samples�i�]���I�ȃf�[�^�����j���X�L�b�v�f�R�[�h���邩�ۂ����w�肵�܂��B
		=true   skip priming��L�������܂�
		=false  skip priming�𖳌������܂�

	layout
		�����`���l���������w�肷�邱�Ƃ��ł��܂��B
		�����X�g���[���𗘗p����ہA�Ӑ}�������C�A�E�g�ň������Ƃ��\�ƂȂ�܂��B
		
		= �����͈ȉ����Q�Ɓi�_�u���N�H�[�e�[�V�����Ŋ��邱�Ɓj
		
		FL  = �t�����g�E���t�g
		FR  = �t�����g�E���C�g
		FC  = �t�����g�E�Z���^�[
		LFE = �����g���G�t�F�N�g�i0.1ch�̒ቹ�j
		BL  = �o�b�N�i���A�j�E���t�g
		BR  = �o�b�N�i���A�j�E���C�g
		FLC = �t�����g�E���t�g�̃Z���^�[
		FRC = �t�����g�E���C�g�̃Z���^�[
		BC  = �o�b�N�i���A�j�E�Z���^�[
		SL  = �T�C�h�E���t�g
		SR  = �T�C�h�E���C�g
		TC  = �g�b�v�E�Z���^�[
		TFL = �g�b�v�E�t�����g�E���t�g
		TFC = �g�b�v�E�t�����g�E�Z���^�[
		TFR = �g�b�v�E�t�����g�E���C�g
		TBL = �g�b�v�E�o�b�N�E���t�g
		TBC = �g�b�v�E�o�b�N�E�Z���^�[
		TBR = �g�b�v�E�o�b�N�E���C�g
		DL  = �_�E���~�b�N�X�E���t�g
		DR  = �_�E���~�b�N�X�E���C�g
		
		��)
		layout="FL+FR+FC+LFE+BL+BR"		# 5.1ch�T���E���h�̎w��
		
		�܂��A�ȉ��̂悤�ɃV���v���Ȏw����@������܂��B
		
		mono           = FC�i���m�����j
		1              = mono �w��Ɠ��l
		stereo         = FL+FR�i�X�e���I�j
		2              = stereo �w��Ɠ��l
		2.1            = FL+FR+LFE
		3.0            = FL+FR+FC
		3.1            = FL+FR+FC+LFE
		3.0(back)      = FL+FR+BC
		4.0            = FL+FR+FC+BC
		4.1            = FL+FR+FC+LFE+BC
		quad           = FL+FR+BL+BR
		quad(side)     = FL+FR+SL+SR
		5.0            = FL+FR+FC+BL+BR
		5.0(side)      = FL+FR+FC+SL+SR
		5.1            = FL+FR+FC+LFE+BL+BR�i5.1ch�T���E���h�j
		5.1(side)      = FL+FR+FC+LFE+SL+SR
		5.1+downmix    = FL+FR+FC+LFE+BL+BR+DL+DR
		6              = 5.1�w��Ɠ��l
		6.0            = FL+FR+FC+BC+SL+SR
		6.0(front)     = FL+FR+FLC+FRC+SL+SR
		hexagonal      = FL+FR+FC+BL+BR+BC
		6.1            = FL+FR+FC+LFE+BC+SL+SR
		6.1(front)     = FL+FR+LFE+FLC+FRC+SL+SR
		7              = 6.1�w��Ɠ��l
		7.0            = FL+FR+FC+BL+BR+SL+SR
		7.0(front)     = FL+FR+FC+FLC+FRC+SL+SR
		7.1            = FL+FR+FC+LFE+BL+BR+SL+SR
		7.1(wide)      = FL+FR+FC+LFE+BL+BR+FLC+FRC
		7.1(wide-side) = FL+FR+FC+LFE+FLC+FRC+SL+SR
		7.1+downmix    = FL+FR+FC+LFE+BL+BR+SL+SR+DL+DR
		8              = 7.1�w��Ɠ��l
		octagonal      = FL+FR+FC+BL+BR+BC+SL+SR
		downmix        = DL+DR�istereo�ւ̃_�E���~�b�N�X�j
		
		��)
		layout="5.1"			# layout="FL+FR+FC+LFE+BL+BR" �w��Ɠ��l
		layout="7.1(wide)"		# layout="FL+FR+FC+LFE+BL+BR+FLC+FRC" �w��Ɠ��l

	rate
		�����̃T���v�����O���[�g���w�肵�܂��B�ʏ�͖��w��ł��܂��܂���B
		
		��) 44.1KHz �̏ꍇ
		rate=44100

	decoder
	�D��I�Ɏg�p�������f�R�[�_�����L�q���܂��B
	�\�L�� libavcodec �� decoder name �ɑ���A�ꗗ�� decoder_name.txt �ɍڂ��Ă���܂��̂ł�������Q�Ƃ��Ă��������B
	�J���}��؂�ŕ����̃f�R�[�_���w��ł��A�L�q�����擪�̃f�R�[�_����D��I�Ɏg�p�����݂܂��B
	
	��ɓ���R�[�f�b�N�̃f�R�[�_������������̂ɑ΂��ėL���ȋ@�\�ł���A
	�ΏۂƂȂ�f�R�[�_���ЂƂ�������������A�ǂݍ������Ƃ��Ă��铮��E�����t�@�C���̃R�[�f�b�N���s���ȏꍇ�́A
	���w��ɂ�鎩�����ʂ��]�܂����ł��傤�B



---------------------------------------------------------------------------------------------------

��Libav/ffmpeg ���T�|�[�g����R���e�i�y�щf���R�[�f�b�N�̓ǂݍ���

LWLibavVideoSource("source file", cache, stream_index, threads, seek_threshold, seek_mode, dr, fpsnum, fpsden, repeat, dominance, stacked, format, decoder)

	"source file"
		�ǂݍ��މf���t�@�C�����w�肵�܂��B

	cache
		�f���X�g���[������͂��ăC���f�b�N�X�t�@�C���i�g���q lwi�j�𐶐����܂��B
		�C���f�b�N�X�t�@�C���𐶐����Ă����ƁA�ҏW���̃V�[�N�������K�ɂȂ�܂��B
		�C���f�b�N�X�t�@�C���� AviUtl �� Libav-SMASH File Reader ������������̂Ƒ��݂Ɍ݊���������܂��B
		=true    �C���f�b�N�X�t�@�C���𐶐����܂��i�f�t�H���g�j
		=false   �C���f�b�N�X�t�@�C���𐶐����܂���

	stream_index
		�f���X�g���[���̃C���f�b�N�X�i���o�[���w�肵�ēǂݍ��݂܂��B
		�����̃X�g���[�����i�[����Ă���R���e�i����C�ӂ̉f�����f�R�[�h����ۂɎw�肵�܂��傤�B
		=-1   ��������i�f�t�H���g�j
		=n    �C�ӂ̃C���f�b�N�X�i���o�[(n)�ɑΉ�����f���X�g���[����ǂݍ��݂܂�

		�C���f�b�N�X�t�@�C���̎d�l�ɂ��Ă͂����� https://pop.4-bit.jp/?p=5474 ���Q�l�ɂ��Ă��������B
		�i���݂͊g���q�� lwi �ɕύX����A�C���f�b�N�X�t�@�C���̃t�H�[�}�b�g�� ver.13�j

	threads
		��������X���b�h�����w�肵�܂��B
		=0    ��������i�����j
		=n    �C�ӂ̃X���b�h��(n)���w�肵�ď������܂�

	seek_threshold
		���Ԏ��̖��������Ƀ����_���A�N�Z�X�i�V�[�N�j�����t���[���Ԋu���ݒ�͈͓��ł���΁A
		�L���b�V������Ă���t���[�����瑦�f�R�[�h�����ė]���ȏ������Ȃ��܂��B
		�͈͂��L���������I�s�N�`������f�R�[�h�������������A�ނ���x���Ȃ�P�[�X��
		���邽�߁A���X�ɐݒ肷��ق����ǂ��ł��傤�B
		�ҏW���ȂǁA�����_���ȃV�[�N���v�������V�[���Ŗ𗧂\��������܂��B
		=10  �f�t�H���g�i�����l�j
		=n   seek_threshold��L��������t���[����(n)���w�肵�܂�

	seek_mode
		�V�[�N���̏������@���w�肵�܂��B
		=0    Normal���[�h�B3��ڂ̃V�[�N���s����Unsafe���[�h��3��ڂƓ����t���[������
	          �f�R�[�h�����s���A����ł��ʖڂȏꍇ�͑O�̃t���[���̃R�s�[�𐶐����܂��i�����j
		=1    Unsafe���[�h�B1��ڂ̃G���[�őO�̃t���[���̃R�s�[�𐶐����܂�
		=2    Aggressive���[�h�B�V�[�N���s�i�G���[�j�ōĎ��s����؂��܂���B�ȈՊm�F�����B

	dr
		Libav/ffmpeg(libavcodec)��custom get_buffer()���g�p�����_�C���N�g�ǂݍ��݂����܂��B
		dr ���g�p���Ȃ��ꍇ�Ɣ�r���Ė�50%�O��̃X�s�[�h�A�b�v�������imuken���k�j�B
		�������A�C���^���[�X�f���ŏc32�̔{���f�R�[�h�����̂܂܁A
		H.264�̏ꍇ�͏c2���C�����t������邽�߁A
		�f�����ŏI�I�ɕ\�����ׂ��𑜓x�ɂ���ꍇ��crop������K�v�Ƃ���P�[�X������܂��B
		
		�Ⴆ�΁A1080i �� MPEG-2 �X�g���[���͏c1088�Ń_�C���N�g�Ƀf�R�[�h�E�\������邽�߁A
		��8���C���� crop ����1080�ɂ���Ƃ�������ł��B
		
		=true    �_�C���N�g�ǂݍ��݂�L�������܂�
		=false   �_�C���N�g�ǂݍ��݂𖳌������܂��i�f�t�H���g�B�]���̏����Ɠ����j


	fpsnum(�f�t�H���g 0)
	fpsden(�f�t�H���g 1)
		VFR->CFR �ϊ�������ۂ�CFR�̃t���[�����[�g��fpsnum(���q)�Afpsden(����)�Ƃ���
		���ꂼ��w�肵�܂��B
		�ϊ��̓t���[���x�[�X�ōs���A�t���[���̐������E�폜�ɂ���Ďw�肳�ꂽ
		�t���[�����[�g�ɒ�������܂��B
		
		��)
		fpsnum=60000, fpsden=1001	# 59.94fps�Ƃ���VFR->CFR�ϊ�

	repeat
		�f���X�g���[����RFF(Repeat First Field)�t���O������ꍇ�A�����L�������܂��B
		
		�v���O���b�V�u�x�[�X��RFF�t���f�����w�肳�ꂽ�t���O�ɏ]����
		�v���_�E���o�͂��܂��i�Ⴆ�΁A�o�͐悪�e���r��z�肵�Ă���f����59.94i�փv���_�E���o�́j�B
		�v���_�E�����̃t�B�[���h���͌�q�� dominance �Ŏw��B
		�������Afpsnum ����� fpsden �w��ɂ�� VFR->CFR �ϊ���L���������ꍇ repeat �ݒ�͖�������܂��B
		
		�����ȃv���O���b�V�u�f���ɑ΂��ėL���������2:1�C���^���[�X�o�͂ƂȂ�܂�(1�t���[����2�t�B�[���h�����ɂȂ�)�B
		
		=true    �@�\��L�������܂�
		=false   �@�\�𖳌������܂�

	dominance
		��L repeat �L�����ɋ@�\���A�v���_�E�������̃t�B�[���h�����w�肵�܂��B
		
		=0    Obey source flags �\�[�X�f���̃t���O�ɏ]���ݒ肵�܂�(�f�t�H���g)
		=1    TFF(Top Field First)�Ƃ��ăt�B�[���h�������s���܂�
		=2    BFF(Bottom Field First)�Ƃ��ăt�B�[���h�������s���܂�

	stacked 
		AviSynth �� high bit-depth �ɑΉ����܂��B
		�������A���̃��[�h��L��������� dr�i�_�C���N�g�ǂݍ��݁j�͎g�p�ł��܂���B
		
		=true    high bit-depth ��L�������܂�
		=false   high bit-depth �𖳌������܂��i�f�t�H���g�j

	format
		�s�N�Z���t�H�[�}�b�g���w�肵�܂��B
		�f�t�H���g�ł͓ǂݍ��񂾉f���X�g���[���̃t�H�[�}�b�g�����̂܂܏o�͂��܂��B
		�������Adr ���[�h�̎g�p�ŏo�͂����s�N�Z���t�H�[�}�b�g�����߂��Ă���ꍇ�A
		format �w��͋@�\���܂���B
		
		"Y8"
		"RGB24"
		"RGB32"
		"YUY2"
		"YUV420P8"
		"YUV422P8"
		"YUV444P8"
		"YUV410P8"
		"YUV411P8"
		"YUV420P9"
		"YUV422P9"
		"YUV444P9"
		"YUV420P10"
		"YUV422P10"
		"YUV444P10"
		"YUV420P12" (ffmpeg only)
		"YUV422P12" (ffmpeg only)
		"YUV444P12" (ffmpeg only)
		"YUV420P14" (ffmpeg only)
		"YUV422P14" (ffmpeg only)
		"YUV444P14" (ffmpeg only)
		"YUV420P16"
		"YUV422P16"
		"YUV444P16"

	decoder
		�D��I�Ɏg�p�������f�R�[�_�����L�q���܂��B
		�\�L�� libavcodec �� decoder name �ɑ���A�ꗗ�� decoder_name.txt �ɋL�ڂ��Ă���܂��̂ł�������Q�Ƃ��Ă��������B
		�J���}��؂�ŕ����̃f�R�[�_���w��ł��A�L�q�����擪�̃f�R�[�_����D��I�Ɏg�p�����݂܂��B
		
		��1)
			h264_cuvid,h264
		
			�ŏ��� NVIDIA GPU ���T�|�[�g���� Video Decoder(CUVID) �ɂ�� H.264(MPEG-4 AVC)�f�R�[�_���g�p�B
			���̏������s�\�ł������ꍇ��2�Ԗڂ� ffmpeg libavcodec �Ɏ�������Ă��� H.264 �f�R�[�_���g�p���܂��B
		
		��2)
			mpeg2_qsv,mpeg2video
		
			��2�ł́A�܂� Intel QSV �ɂ�� MPEG-2 �̃f�R�[�h�����s���A
			���ꂪ�s�\�ł������ꍇ�� ffmpeg libavcodec �Ɏ�������Ă��� MPEG-2 �f�R�[�_���g�p���܂��B
		
		��3)
			hevc_cuvid,hevc
		
			HEVC(H.265)�� NVIDIA Video Decoder(CUVID)�Ńf�R�[�h�����݁A
			CUVID �������� ffmpeg libavcodec �ɂ�� HEVC �f�R�[�_���g�p���܂��B
	
	��ɓ���R�[�f�b�N�̃f�R�[�_������������̂ɑ΂��ėL���ȋ@�\�ł���A
	�ΏۂƂȂ�f�R�[�_���ЂƂ�������������A�ǂݍ������Ƃ��Ă��铮��E�����t�@�C���̃R�[�f�b�N���s���ȏꍇ�́A
	���w��ɂ�鎩�����ʂ��]�܂����ł��傤�B



��Libav/ffmpeg ���T�|�[�g����R���e�i�y�щ����̓ǂݍ���

LWLibavAudioSource("source file", cache, stream_index, av_sync, layout, rate, decoder)

	"source file"
		�ǂݍ��މf���t�@�C�����w�肵�܂��B

	cache
		�X�g���[������͂��ăC���f�b�N�X�t�@�C���i�g���q lwi�j�𐶐����܂��B
		�C���f�b�N�X�t�@�C���𐶐����Ă����ƁA�ҏW���̃V�[�N�������K�ɂȂ�܂��B
		�C���f�b�N�X�t�@�C���� AviUtl �� Libav-SMASH File Reader ������������̂�
		�݊��������邽�߁AAviSynth�EAviUtl �݂��̊��ŗ��p�ł��܂��B
		=true    �C���f�b�N�X�t�@�C���𐶐����܂��i�f�t�H���g�j
		=false   �C���f�b�N�X�t�@�C���𐶐����܂���

	stream_index
		�����X�g���[���̃C���f�b�N�X�i���o�[���w�肵�ēǂݍ��݂܂��B
		�����̃X�g���[�����i�[����Ă���R���e�i����C�ӂ̉������f�R�[�h����ۂɎw�肵�܂��傤�B
		=-1  ��������i�f�t�H���g�j
		=n   �C�ӂ̃C���f�b�N�X�i���o�[(n)�ɑΉ����鉹���X�g���[����ǂݍ��݂܂�

	av_sync
		LWLibavVideoSource�ǂݍ��ݎ��̃C���f�b�N�X�t�@�C��(�܂��̓t�@�C���𐶐�����
		�����I�ɐ��������C���f�b�N�X�j�Őݒ肳�ꂽ�f���X�g���[���Ɖ����𓯊������āA���Y����h���܂��B
		�������A�f���E�����Ƃ��� Libav �œǂݍ��܂�Ă��邱�Ƃ����������ƂȂ�܂��B
		
		�擪�t���[���������̓����|�C���g�ƂȂ�܂����Affmpeg��p����MPEG�n�f����\������ꍇ�A
		�擪GOP��I�s�N�`���A�܂��̓f�R�[�h���ۏ؂���Ȃ�B�����P�s�N�`�����擪�ɂ���ꍇ�͍ŏ���I�s�N�`����
		��֕\�����邽�߁AClosedGOP��OpenGOP�ł͕\�����[�����኱�قȂ�܂��i������������͓�������j�B
		* ���v���O�C���� ffmpeg ���g�p���Ă��܂��B

		Libav ��p���Ă���ꍇ���擪�t���[���������|�C���g�ƂȂ�܂����A
		OpenGOP���̂悤��B�s�N�`���n�܂�ł����Ă�I�s�N�`���ő�֕\�������A���Ă��Ă������\�����܂��B
		
		=true    �C���f�b�N�X�t�@�C���Ŏw�肳��Ă���f���X�g���[���Ɖ����𓯊����܂�
		=false   �����𓯊������܂���i�f�t�H���g�j

	layout
		�����`���l���̃��C�A�E�g�������w�肷�邱�Ƃ��ł��܂��B
		�������Ӑ}�������C�A�E�g�ŏo�͂������Ƃ��Ɏw�肵�܂��傤�B
		
		= �����͈ȉ����Q�Ɓi�_�u���N�H�[�e�[�V�����Ŋ��邱�Ɓj
		
		FL  = �t�����g�E���t�g
		FR  = �t�����g�E���C�g
		FC  = �t�����g�E�Z���^�[
		LFE = �����g���G�t�F�N�g�i0.1ch�̒ቹ�j
		BL  = �o�b�N�i���A�j�E���t�g
		BR  = �o�b�N�i���A�j�E���C�g
		FLC = �t�����g�E���t�g�̃Z���^�[
		FRC = �t�����g�E���C�g�̃Z���^�[
		BC  = �o�b�N�i���A�j�E�Z���^�[
		SL  = �T�C�h�E���t�g
		SR  = �T�C�h�E���C�g
		TC  = �g�b�v�E�Z���^�[
		TFL = �g�b�v�E�t�����g�E���t�g
		TFC = �g�b�v�E�t�����g�E�Z���^�[
		TFR = �g�b�v�E�t�����g�E���C�g
		TBL = �g�b�v�E�o�b�N�E���t�g
		TBC = �g�b�v�E�o�b�N�E�Z���^�[
		TBR = �g�b�v�E�o�b�N�E���C�g
		DL  = �_�E���~�b�N�X�E���t�g
		DR  = �_�E���~�b�N�X�E���C�g
		
		��)
		layout="FL+FR+FC+LFE+BL+BR"		# 5.1ch�T���E���h�̎w��
		
		�܂��A�ȉ��̂悤�ɃV���v���Ȏw����@������܂��B
		
		mono           = FC�i���m�����j
		1              = mono �w��Ɠ��l
		stereo         = FL+FR�i�X�e���I�j
		2              = stereo �w��Ɠ��l
		2.1            = FL+FR+LFE
		3.0            = FL+FR+FC
		3.1            = FL+FR+FC+LFE
		3.0(back)      = FL+FR+BC
		4.0            = FL+FR+FC+BC
		4.1            = FL+FR+FC+LFE+BC
		quad           = FL+FR+BL+BR
		quad(side)     = FL+FR+SL+SR
		5.0            = FL+FR+FC+BL+BR
		5.0(side)      = FL+FR+FC+SL+SR
		5.1            = FL+FR+FC+LFE+BL+BR�i5.1ch�T���E���h�j
		5.1(side)      = FL+FR+FC+LFE+SL+SR
		5.1+downmix    = FL+FR+FC+LFE+BL+BR+DL+DR
		6              = 5.1�w��Ɠ��l
		6.0            = FL+FR+FC+BC+SL+SR
		6.0(front)     = FL+FR+FLC+FRC+SL+SR
		hexagonal      = FL+FR+FC+BL+BR+BC
		6.1            = FL+FR+FC+LFE+BC+SL+SR
		6.1(front)     = FL+FR+LFE+FLC+FRC+SL+SR
		7              = 6.1�w��Ɠ��l
		7.0            = FL+FR+FC+BL+BR+SL+SR
		7.0(front)     = FL+FR+FC+FLC+FRC+SL+SR
		7.1            = FL+FR+FC+LFE+BL+BR+SL+SR
		7.1(wide)      = FL+FR+FC+LFE+BL+BR+FLC+FRC
		7.1(wide-side) = FL+FR+FC+LFE+FLC+FRC+SL+SR
		7.1+downmix    = FL+FR+FC+LFE+BL+BR+SL+SR+DL+DR
		8              = 7.1�w��Ɠ��l
		octagonal      = FL+FR+FC+BL+BR+BC+SL+SR
		downmix        = DL+DR�istereo�ւ̃_�E���~�b�N�X�j
		
		��)
		layout="5.1"			# layout="FL+FR+FC+LFE+BL+BR" �w��Ɠ��l
		layout="7.1(wide)"		# layout="FL+FR+FC+LFE+BL+BR+FLC+FRC" �w��Ɠ��l

	rate
		�����̃T���v�����O���[�g���w�肵�܂��B�ʏ�͖��w��ł��܂��܂���B
		
		��) 44.1KHz �̏ꍇ
		rate=44100

	decoder
	�D��I�Ɏg�p�������f�R�[�_�����L�q���܂��B
	�\�L�� libavcodec �� decoder name �ɑ���A�ꗗ�� decoder_name.txt �ɍڂ��Ă���܂��̂ł�������Q�Ƃ��Ă��������B
	�J���}��؂�ŕ����̃f�R�[�_���w��ł��A�L�q�����擪�̃f�R�[�_����D��I�Ɏg�p�����݂܂��B
	
	��ɓ���R�[�f�b�N�̃f�R�[�_������������̂ɑ΂��ėL���ȋ@�\�ł���A
	�ΏۂƂȂ�f�R�[�_���ЂƂ�������������A�ǂݍ������Ƃ��Ă��铮��E�����t�@�C���̃R�[�f�b�N���s���ȏꍇ�́A
	���w��ɂ�鎩�����ʂ��]�܂����ł��傤�B



===================================================================================================

�yLWLibavVideoSource �g�p���̒��ӓ_�z

LWLibavVideoSource �ňꕔ�R���e�i(TS��)��ǂݍ��ނƃt���[�����[�g���������擾�ł��Ȃ��P�[�X���H�ɂ��邽�߁A
���̏ꍇ�� AssumeFPS �Ő��m�ȃt���[�����[�g���Đݒ肵�Ă��������i���݂͉��P����Ă��܂��j�B

�킩��Ȃ��ꍇ�̓t���[�����[�g���Ďw�肷�ׂ��ł͂���܂��񂪁A�ǂ����Ă��m�F�������ꍇ��
MediaInfo ���Ńt���[�����[�g�𒲂ׂ�̂���ł��B

# MPEG �n�R�[�f�b�N�Ő擪�܂��͍Ō�� GOP ���s���S�ł���P�[�X�Ŕ������Ղ��ł����A���݂͂��Ȃ���P����Ă��܂�


��)�e���r�x�[�X�ł���29.97(30000/1001)fps�̉f���X�g���[��

	V1 = LWLibavVideoSource("e:\video\hogehoge.ts")
	�`�����`
	AssumeFPS(30000,1001)    # trim��t3-2�v���_�E���O�Ɏw�肷��

�܂���

	LWLibavVideoSource("e:\video\hogehoge.ts").AssumeFPS(30000,1001)



===================================================================================================

�y avs ������ �z

��MP4�R���e�i�̉f���̂ݓǂݍ���
	LSMASHVideoSource("e:\video\hogehoge.mp4", track=0, threads=0, seek_threshold=10, seek_mode=0)

�������̂ݓǂݍ���
	LSMASHAudioSource("e:\video\hogehoge.m4a", track=0, skip_priming=true)

���f���Ɖ�����mux���ꂽ����A�܂��͉f���E�������ʁX�̃X�g���[����ǂݍ���
	��1)
	V1 = LSMASHVideoSource("e:\video\hogehoge.mp4", track=0, threads=0, seek_threshold=10, seek_mode=0)
	A1 = LSMASHAudioSource("e:\video\hogehoge.mp4", track=0, skip_priming=true)
	AudioDub(V1, A1)

	��2)
	V1 = LSMASHVideoSource("e:\video\hogehoge.mp4", track=0, threads=0, seek_threshold=10, seek_mode=0)
	A1 = LSMASHAudioSource("e:\video\hogehoge.m4a", track=0, skip_priming=true)
	AudioDub(V1, A1)

��Libav/ffmpeg �Ή��̓�������������œǂݍ���
	V1 = LWLibavVideoSource("e:\video\hogehoge.ts", cache=true, stream_index=-1, threads=0).AssumeFPS(30000,1001)
	A1 = LWLibavAudioSource("e:\video\hogehoge.ts", av_sync=true)
	AudioDub(V1, A1)



===================================================================================================

�y�C���E���L�����z

avi ����� divx �R���e�i�Ɋi�[���ꂽ�ꕔ����ɂ�����

	�E����ɓW�J�ł��Ȃ�
	�E�V�[�N����Ɖf���Ɖ����̓����������

���̌��ۂ��m�F���Ă���A�ُ���m�F�����ꍇ�� AVISource �܂��� OpenDMLSource �ɂēǂݍ���ł��������B
���̍ۂ͓���Ɏg�p�����R�[�f�b�N(�f�R�[�_)��ʓr�C���X�g�[������K�v������܂��B



===================================================================================================

�y�\�[�X�R�[�h�z
	* L-SMASH Works(r940)
	https://github.com/VFR-maniac/L-SMASH-Works
	
	* L-SMASH(r1474)
	https://github.com/l-smash/l-smash
	
	* ffmpeg(4.2.2)
	https://www.ffmpeg.org/
	
	* ffnvcodec headers r52
	https://github.com/FFmpeg/nv-codec-headers
	
	* External libraries
	AOM AV1 Codec Library r28701	https://aomedia.googlesource.com/aom/
	libgme 0.6.2					https://bitbucket.org/mpyne/game-music-emu/wiki/Home
	libgme 0.6.2-1(MSVC)			https://github.com/ShiftMediaProject/game-music-emu
	libvpx v1.8.2					https://github.com/webmproject/libvpx
	mfx_dispatch 1.25				https://github.com/lu-zero/mfx_dispatch
	zlib 1.2.11						https://www.zlib.net/

	�r���h�Ɏg�p���� L-SMASH Works�AL-SMASH�Affmpeg �̃\�[�X�R�[�h�͈ȉ�������擾�ł��܂�
	https://pop.4-bit.jp/bin/l-smash/L-SMASH_Works_r940_sourcecodes.tar.bz2



===================================================================================================
�y�r���h�����l�z
	POPn
	RePOPn https://pop.4-bit.jp/

===================================================================================================

�y�X�V�����z
L-SMASH Works �\�[�X�R�[�h�̍X�V������ changelog.txt ��������������
