-----------------------------------------------------------------------------
AviUtl/AviSynth/VapourSynth plug-in
L-SMASH Works r940 release1 [2020/01/05]
-----------------------------------------------------------------------------

�y�T�v�z
	���v���O�C���́Amuken ���� L-SMASH Works �J���̈�Ƃ��Ď�����i�߂Ă��� OSS �ł���A
	MP4/MOV/QT/3gp/3g2/F4V/M4A ���� L-SMASH �Ή��R���e�i�Ɋi�[���ꂽ�f���E�����X�g���[�������
	libav / ffmpeg ���C�u�����Ή��̃R���e�i�t�H�[�}�b�g��ǂݍ��ނ��߂̂��̂ł��B
	�R�[�f�b�N�̃f�R�[�h�� ffmpeg �� Libav ���󂯎����܂��i���v���O�C���� ffmpeg ���g�p�j�B

	AviSynth �p�v���O�C�� ( LSMASHSource.dll ) �ɂ��ẮA
	AviSynth �t�H���_�� Readme.txt ���������������B



�y�t�@�C���z
	lwcolor.auc						# AviUtl L-SMASH Works LW ColorSpace(LW48)�v���O�C��
	lwdumper.auf					# AviUtl L-SMASH Works Dumper �v���O�C��
	lwinput.aui						# AviUtl L-SMASH Works File Reader �v���O�C��
	lwmuxer.auf						# AviUtl L-SMASH Works Muxer �v���O�C��
	changelog.txt					# L-SMASH Works �\�[�X�R�[�h�X�V����
	decoder_name.txt				# ���v���O�C���ŗL��������Ă���f�R�[�_�ꗗ�iPreferred decoders �w�莞�Ɏg�p�j
	Readme.txt						# ���e�L�X�g

	AviSynth/LSMASHSource.dll		# AviSynth LSMASHSource �v���O�C���i32bit�Łj
	AviSynth/Readme.txt				# AviSynth LSMASHSource �v���O�C���ɂ��Ẵe�L�X�g

	AviSynth/x64/LSMASHSource.dll	# AviSynth LSMASHSource �v���O�C���i64bit�Łj

	LICENSE/						# �e���C�Z���X�̃e�L�X�g

	readme/							# ���� readme �e�L�X�g�B�e�ݒ荀�ڂɂ��čX�ɏڍׂȉ����������Ă��܂�

	VapourSynth/vslsmashsource.dll	# VapourSynth LSMASHSource �v���O�C��



�yAviUtl�p�v���O�C���̊ȈՐ����z

�EL-SMASH Works File Reader
	L-SMASH ����� Libav / AviSynth ���C�u������p����
	MP4(mov��)�R���e�i�� AviUtl �֓ǂݍ��ޓ��̓v���O�C���ł��B
	�f����YUY2/YC48�A������PCM�œǂݍ��݂܂��B

�EL-SMASH Works Muxer
	Libav+L-SMASH �œǂݍ��񂾉f���E�����X�g���[���𓯂��R���e�i
	�t�H�[�}�b�g�ŏo�͂��܂��B
	�o�̓f�[�^�͓��̓\�[�X�̍Ĉ��k�łȂ��X�g���[���R�s�[�ƂȂ�܂��B

�EL-SMASH Works Dumper
	MP4����BOX�����_���v���A�e�L�X�g�t�@�C���Ƃ��ďo�͂��܂��B
	�܂��ATimecode v2 ���o�͉\�B

�ELW ColorSpace
	YUV���ꂼ��16bit���̃f�[�^���������Ƃ�O��Ƃ����F�ϊ��v���O�C���B
	
	AviUtl��YC48��YUV�e16bit���̃f�[�^�̂�����12bit�����~�b�g�����W(8bit���̃f�[�^�I�Ɍ����Εʖ�TV�X�P�[��)��
	�}�b�v���Ĉ�������O��Ƃ��Ă��܂����ALW ColorSpace �ɂ����Ă�16bit�����߂����ς��������߁A
	�]�����炠�鑼�̃v���O�C���t�B���^���m���ɏ����ł���ۏ؂͖������Ƃɒ��ӂ��Ă��������B
	(���~�b�g�����W�Ƃ��Ă�Y4096�`60160�AU,V4096�`61440(���F32768)�Ƃ������ɂȂ�܂�)
	
	AviUtl�����F��ԁE�s�N�Z���t�H�[�}�b�g�ł���uYC48�v�Ƌ�ʂ��邽�߁A
	LW ColorSpace �́uLW48�v�Ƃ��Ē�`����Ă��܂��B
	��{�I�ɂ͊O����YC48�̃f�[�^�R�s�[�ł��邽�߁A�F��ԕϊ���YC48�Ɠ��l�� BT.601 �����ƂȂ�܂��B



�y����݊����z
	AviUtl 0.99i7 �ȍ~�œ��삵�܂��B
	0.99i7 �ȑO�ł́A�����𐳏�ɏ����ł��Ȃ��\�����m�F���Ă���܂��B



�y�Ή��R���e�i�t�H�[�}�b�g�z
	�Ή��R���e�i�E�R�[�f�b�N�͉��L�� ffmpeg �������������������B
	
	FFmpeg Supported File Formats, Codecs or Features
	https://www.ffmpeg.org/general.html#Supported-File-Formats_002c-Codecs-or-Features
	
	�܂��A�ȉ��̊O�����C�u�����ɂ��g�����s���Ă��܂��B

		�EAOM AV1 Codec Library �ɂ�� AV1 �̃f�R�[�h
		  https://aomedia.googlesource.com/aom/

		�EOpenCORE AMR �ɂ�� AMR-NB, AMR-WB �̃f�R�[�h
		  https://sourceforge.net/projects/opencore-amr/

		�EGame Music Emu �ɂ��Q�[�������t�@�C���̃f�R�[�h�i�Ή��@��E�����͉��L�T�C�g�Q�Ƃ̂��Ɓj
		  https://bitbucket.org/mpyne/game-music-emu/wiki/Home
		  		AviUtl �Őݒ肵�Ă���ő�t���[�����܂Ń��[�v���ĉ�����W�J���܂��̂�
		  		�ő�t���[���������قǓW�J�Ɏ��Ԃ�������܂��B
		    	�K�v�Ȏ��Ԓ��ɍ��킹�čő�t���[�������Đݒ肵�ǂݍ��ނ��Ƃ��������߂��܂��B

	���ۂɗ��p�\�ȁi�r���h���ɗL��������Ă���j�f�R�[�_�ꗗ�� decoder_name.txt ���������������B



�y�����z
	lwcolor.auc�Alwdumper.auf�Alwinput.aui�Alwmuxer.auf �e�t�@�C����
	AviUtl �Ɠ����t�H���_�A�܂��� AviUtl ������ Plugins �t�H���_�ɃR�s�[���Ă��������B



�y�����̊m�F�z
�EL-SMASH Works File Reader �̊m�F
	AviUtl ���N�����A[���̑�]��[���̓v���O�C�����]���m�F�B
	L-SMASH Works File Reader ���\������Ă���Γ��������ł��B

�EL-SMASH Works Muxer / L-SMASH Works Dumper �̊m�F
	AviUtl ���N�����A[���̑�]��[�v���O�C���t�B���^���]���m�F�B
	L-SMASH Works Dumper �� L-SMASH Works Muxer ���\������Ă���Γ��������ł��B



�y�g�����z
�EL-SMASH Works File Reader
	[�t�@�C��]��[�t�@�C�����J��] 
	�܂��� AviUtl �̃E�B���h�E�Ƀv���O�C���Ή�����A�����t�@�C�����h���b�O���h���b�v����Ɠǂݍ��߂܂��B

	�������A�g���ҏW�ł͐Î~���ǂݍ��ޏꍇ�ł����Ă��A
	�u���f�B�A�I�u�W�F�N�g�̒ǉ��v���u����t�@�C���v�Ƃ��ĎQ�ƃt�@�C���œǂݍ���ł��������B
	Allfile �\���őΉ��摜���ǂݍ��߂܂��i������񓮉���j�B

	���v���O�C���́A���f�B�A�^�C�v�Ɋ֌W�Ȃ������ǂݍ��ރv���O�C���Ƃ��ē��삷�邽�߂̎d�l�ł��B

�EL-SMASH Works Muxer
	[�t�@�C��]��[�G�N�X�|�[�g]��[L-SMASH Works Muxer]��I�������
	�C�ӂ̃R���e�i�t�H�[�}�b�g�Ńt�@�C���ۑ��ł��܂��B
	�������A�Ή�������o�̓R���e�i��MP4���ꕔ�̃t�H�[�}�b�g�Ɍ����܂��B

�EL-SMASH Works Dumper
	[�t�@�C��]��[�G�N�X�|�[�g]��[L-SMASH Works Dumper]��I�����A
	�_���v�̓t�@�C���̎�ނŁudump File�v
	�^�C���R�[�h�̏o�͂́uTimecode v2 File�v
	��I�����Ă��������B

�ELW ColorSpace
	[�ݒ�]��[�F�ϊ��̐ݒ�]�ŁuLW ColorSpace�v��I�����܂��B
	�c�[���E�B���h�E��\�����Ă���[����][�o��]�őI�Ԃ��Ƃ��ł��܂��B



�y�ݒ�z
�t�@�C�������ݒ聨���̓v���O�C���̐ݒ聨L-SMASH Works File Reader ��
�v���O�C���̐ݒ肪�ł��܂��B


�EL-SMASH Works Muxer �� L-SMASH Works Dumper ���̂̐ݒ�͂���܂���

�ELibav+L-SMASH �̃`�F�b�N
	L-SMASH ���� Libav �܂��� ffmpeg �ɃA�N�Z�X���ăt�@�C����ǂݍ��݂܂��B

�EAviSynth Script �̃`�F�b�N
	AviSynth ���[�_�[��p���� AviSynth �X�N���v�g�t�@�C���i�g���q avs�j��ǂݍ��݂܂��B

�EVSScript
	VapourSynth �X�N���v�g�t�@�C���i�g���q vpy�j��ǂݍ��݂܂��B

�ELW-Libav �̃`�F�b�N
	L-SMASH Works �Ɏ�������Ă��� Libav Reader ���g�p����
	Libav �܂��� ffmpeg �ɒ��ڃA�N�Z�X���܂��B
	FFMS �����ǂݍ��߂�t�H�[�}�b�g�������A�t���[���A�L�����[�g�ȓǂݍ��݂��\�ł��B
	
	�����Ƀ`�F�b�N����ꂽ�ꍇ�́ALibav+L-SMASH �� Libav ���ɃA�N�Z�X�����s���܂��B
	�����̏����͉f���E�����X�g���[���ʁX�ɃA�N�Z�X�����݂܂��B
	avs �� AviSynth ���[�_�[�Avpy �� VapourSynth ���[�_�[�œǂݍ��݂����݂܂��B

�Ethreads
	�����X���b�h����ݒ肵�܂��B
	�w�萔 0 �� Auto �ƂȂ�A�ő吔4�Ŏ����I�ɃZ�b�g����܂��B
	���� lsmash.ini �t�@�C���ɕۑ�����܂��B

�EForward htreshold
	���Ԏ��̖��������Ƀ����_���A�N�Z�X�i�V�[�N�j�����t���[���Ԋu���ݒ�͈͓��ł���΁A
	�L���b�V������Ă���t���[�����瑦�f�R�[�h�����ė]���ȏ������Ȃ��܂��B
	�͈͂��L���������I�s�N�`������f�R�[�h�������������A�ނ���x���Ȃ�P�[�X�����邽�߁A
	���X�ɐݒ肷��ق����ǂ��ł��傤�B
	�ҏW���ȂǁA�����_���ȃV�[�N���v�������V�[���Ŗ𗧂\��������܂��B
	�f�t�H���g�����l�� 10 �ł��B

�ESeek mode
	�V�[�N���̏������@���w�肵�܂��B
		Normal     = 3��ڂ̃V�[�N���s����Unsafe���[�h��3��ڂƓ����t���[������f�R�[�h�����s���A
		             ����ł��ʖڂȏꍇ�͑O�̃t���[���̃R�s�[�𐶐����܂��i�����j
		Unsafe     = 1��ڂ̃G���[�őO�̃t���[���̃R�s�[�𐶐����܂�
		Aggressive = �V�[�N���s�i�G���[�j�ōĎ��s����؂��܂���B�ȈՊm�F�����B

�EVideo scaler
	�F���X�P�[�����O���̑��֐��i�g��E�k���A���S���Y���j���w�肵�܂��B

�EApply repeat flag
	�f���X�g���[����RFF(Repeat First Field)�t���O������ꍇ�A�����L�������܂��B

	�v���O���b�V�u�x�[�X�� RFF �t���f�����w�肳�ꂽ�t���O�ɏ]����
	�v���_�E���o�͂��܂��i�Ⴆ�΁A�o�͐�Ƀe���r��z�肵�Ă���ꍇ�� 59.94i �փv���_�E���o�́j�B
	�v���_�E�����̃t�B�[���h���͌�q�� field dominance �Ŏw��B
	�������A��q�� VFR->CFR ��L��������� Apply repeat flag �͖�������܂��B

	�����ȃv���O���b�V�u�f���ɑ΂��ėL���������2:1�C���^���[�X�o�͂ƂȂ�܂�(1�t���[����2�t�B�[���h�����ɂȂ�)�B

�EField dominance
	��L Apply repeat flag �L�����ɋ@�\���A�v���_�E�������̃t�B�[���h���𓖃I�v�V�����Ŏw�肵�܂��B
	���̂Ƃ���Affmpeg �� libavcodec ���t�B�[���h����K�؂ɓn���Ă���Ȃ����߁A
	����ł� TFF �� BFF ���蓮�w�肷��ق�������ł��B
		Obey source flags = �\�[�X�f���̃t���O�ɏ]���ݒ肵�܂�
		Top -> Bottom     = TFF(Top Field First)�Ƃ��ăt�B�[���h�������s���܂�
		Bottom -> Top     = BFF(Bottom Field First)�Ƃ��ăt�B�[���h�������s���܂�

	��) �K�؂ȃt�B�[���h�����w�肵�� AviUtl �֓n���@�\�ł���AAviUtl �Ő������t�B�[���h����������ۂ�
		AviUtl ���ł��g�b�v�t�@�[�X�g or �{�g���t�@�[�X�g�̎w�肪�K�v�ł��i�ݒ聨�C���^�[���[�X�̉����j�B

�EVFR->CFR
	VFR (Variable Frame Rate : �σt���[�����[�g)�f���� CRF (Constant Frame Rate : �Œ�t���[�����[�g)��
	�ϊ��������P�[�X�Ŏg�p���܂��i�f�t�H���g�̓`�F�b�N OFF �Ŏg�p���Ȃ��j�B
	�o�̓t���[�����[�g�� ���q/���� �Ƃ��Ďw�肵�A�f�t�H���g�ł� 60000/1001(59.94fps) �ƂȂ��Ă��܂��B
	VFR->CFR �ϊ��̓t���[���x�[�X�̐������܂��͊Ԉ����ɂ��s���܂��B

�EAudio delay
	�����̒x���ʂ��w�肵�܂��B
	-�i�}�C�i�X�j�w��ɂ�莞�Ԏ��̉ߋ��֒x��(�}�C�i�X�x��)�����邱�Ƃ��\�ł��B
	���l�̓T���v�����O�P�ʂŏڍׂɎw��ł��܂��ims�Ȃǂ̎��Ԏw��ł͂���܂���j�B
	�T���v�����O���g�� 48KHz �̉����� 500ms (0.5�b)�x�����������ꍇ�� 24000 ���w�肷��Ƃ�������ł��B

�ESampling rate
	�ǂݍ��މ����̃T���v�����O���[�g���w�肵�܂��B�P�ʂ� Hz
	0 �w��ŃI�[�g�i���T���v�����O�����\�[�X�̃T���v�����O���[�g�œǂݍ��ށj�B
	�\�[�X�Ǝw��T���v�����O���[�g���قȂ�P�[�X�ł̓��T���v�����O���ēǂݍ��݂܂��B
	�Ⴆ�΁A48KHz �̉����� 96000Hz (96KHz)�w��œǂݍ��ނ� 48KHz �� 96KHz �̃��T���v�����O�ƂȂ�܂��B

�EChannel layout
	�����`���l���̃��C�A�E�g�������w�肷�邱�Ƃ��ł��܂��B
	�������Ӑ}�������C�A�E�g�ň��������ꍇ�ɗL���ȋ@�\�ł��B
	
	�����͈ȉ����Q��
		
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
		FL+FR+FC+LFE+BL+BR		# 5.1ch�T���E���h�̎w��
		
	�܂��A�ȉ��̂悤�ɃV���v���Ȏw����@������܂��B
		
		mono            = FC�i���m�����j
		1               = mono �w��Ɠ��l
		stereo          = FL+FR�i�X�e���I�j
		2               = stereo �w��Ɠ��l
		2.1             = FL+FR+LFE
		3.0             = FL+FR+FC
		3.1             = FL+FR+FC+LFE
		3.0(back)       = FL+FR+BC
		4.0             = FL+FR+FC+BC
		4.1             = FL+FR+FC+LFE+BC
		quad            = FL+FR+BL+BR
		quad(side)      = FL+FR+SL+SR
		5.0             = FL+FR+FC+BL+BR
		5.0(side)       = FL+FR+FC+SL+SR
		5.1             = FL+FR+FC+LFE+BL+BR�i5.1ch�T���E���h�j
		5.1(side)       = FL+FR+FC+LFE+SL+SR
		5.1+downmix     = FL+FR+FC+LFE+BL+BR+DL+DR
		6               = 5.1�w��Ɠ��l
		6.0             = FL+FR+FC+BC+SL+SR
		6.0(front)      = FL+FR+FLC+FRC+SL+SR
		hexagonal       = FL+FR+FC+BL+BR+BC
		6.1             = FL+FR+FC+LFE+BC+SL+SR
		6.1(front)      = FL+FR+LFE+FLC+FRC+SL+SR
		7               = 6.1�w��Ɠ��l
		7.0             = FL+FR+FC+BL+BR+SL+SR
		7.0(front)      = FL+FR+FC+FLC+FRC+SL+SR
		7.1             = FL+FR+FC+LFE+BL+BR+SL+SR
		7.1(wide)       = FL+FR+FC+LFE+BL+BR+FLC+FRC
		7.1(wide-side)  = FL+FR+FC+LFE+FLC+FRC+SL+SR
		7.1+downmix     = FL+FR+FC+LFE+BL+BR+SL+SR+DL+DR
		8               = 7.1�w��Ɠ��l
		octagonal       = FL+FR+FC+BL+BR+BC+SL+SR
		downmix         = DL+DR�istereo�ւ̃_�E���~�b�N�X�j
		
		��)
		5.1				# FL+FR+FC+LFE+BL+BR �w��Ɠ��l
		7.1(wide)		# FL+FR+FC+LFE+BL+BR+FLC+FRC �w��Ɠ��l

�EMix level
	�����̃~�b�N�X���x���ݒ�ł��B
	�Z���^�[�A�T���E���h�`���l���S�ʁALFE(���G�t�F�N�g�F0.1ch)���ꂼ��Ɏw��\�B

�EA/V sync correction
	Libav �ǂݍ��ݎ��ɃC���f�b�N�X�t�@�C���Őݒ肳�ꂽ�f���X�g���[���Ɖ����𓯊������ĉ��Y����h���܂��B
	�������A�f���E�����Ƃ��� Libav �œǂݍ��܂�Ă��邱�Ƃ����������ƂȂ�܂��B
	
	�擪�t���[���������̓����|�C���g�ƂȂ�܂����Affmpeg ��p���� MPEG �n�f����\������P�[�X�ŁA
	�擪 GOP �� I �s�N�`���A�܂��̓f�R�[�h���ۏ؂���Ȃ� B ����� P �s�N�`�����擪�ɂ���ꍇ�ɍŏ���I�s�N�`����
	��֕\�����邽�߁AClosedGOP �� OpenGOP �ł͕\�����[�����኱�قȂ�܂��i������������͓�������j�B
	* ���v���O�C���� ffmpeg ���g�p���Ă��܂��B
	
	Libav ��p���Ă���ꍇ���擪�t���[���������|�C���g�ƂȂ�܂����A
	OpenGOP ���̂悤�� B �s�N�`���n�܂�ł����Ă� I �s�N�`���ő�֕\�������A���Ă��Ă������\�����܂��B
		
	�`�F�b�NON  = �C���f�b�N�X�Ŏw�肳��Ă���f���X�g���[���Ɖ����𓯊������܂�
	�`�F�b�NOFF = �����̓����@�\�𖳌������܂�

�ECreate Index file
	LW-Libav �ǂݍ��ݎ��ɃX�g���[������͂��ăC���f�b�N�X�t�@�C���i�g���q lwi�j�𐶐����܂��B
	�C���f�b�N�X�t�@�C���𐶐����Ă����ƁA����ȍ~�̃t�@�C���ǂݍ��݂�ҏW���̃V�[�N�������K�ɂȂ�܂��B
	�C���f�b�N�X�t�@�C���� AviSynth �� LWLibavVideoSource ������������̂ƌ݊��������邽�߁A
	AviSynth�EAviUtl �݂��̊��ł��̂܂ܗ��p�ł��܂��B

	�C���f�b�N�X�t�@�C���̑�܂��Ȏd�l�ɂ��Ă͂����� https://pop.4-bit.jp/?p=5474 ���Q�l�ɂ��Ă��������B
	�i���݂͊g���q�� lwi �ɕύX����A�C���f�b�N�X�t�@�C���̃t�H�[�}�b�g�� ver.0.0.2.0-13�j

�ELibav video index
	�f���X�g���[���̃C���f�b�N�X�i���o�[���w�肷�邱�ƂŁA�C�ӂ̉f����ǂݍ��݂܂��B
	�}���`�`���l���̉f���X�g���[���������ۂɖ𗧂ł��傤�B

�ELibav audio index
	�����X�g���[���̃C���f�b�N�X�i���o�[���w�肷�邱�ƂŁA�C�ӂ̉�����ǂݍ��݂܂��B
	�}���`�`���l���̉����X�g���[���������ۂɖ𗧂��܂��B

�EDummy resolution
	�����t�@�C���I�����[�̕ҏW���ɐ�������_�~�[�f���̉𑜓x���w�肵�܂��B

�EDummy flamerate
	�_�~�[�f���̃t���[�����[�g���w�肵�܂��B

�EDummy colorspace
	�_�~�[�f���̃J���[�t�H�[�}�b�g���w�肵�܂��B
	YUY2�ARGB�AYC48(AviUtl�����̐F���) �����ꂩ���w�肵�܂��傤�B

�ELW48 output
	L-SMASH Works �Ǝ��̃s�N�Z���t�H�[�}�b�g����ѐF��Ԃł���uLW48�v�o�͂�L�������܂��B

�EAVS bit-depth
	AviSynth Script ���͂ɂ�����r�b�g�[�x��I�����A���̃r�b�g�[�x�ƌ��Ȃ��ēW�J�������s���܂��B
	�f�t�H���g�� YUV ����� RGB �e8bit�B

�EPreferred decoders
	�D��I�Ɏg�p�������f�R�[�_�����L�q���܂��B
	�\�L�� libavcodec �� decoder name �ɑ���A�ꗗ�� decoder_name.txt �ɍڂ��Ă���܂��̂ł�������Q�Ƃ��Ă��������B
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
	���w��i�󗓁j�ɂ��]���ǂ���̎������ʂ��]�܂����ł��傤�B



�y���ӎ����z

�E���̓v���O�C���̗D��x�ɂ���
	L-SMASH File Reader �ɂ��ẮAAviUtl ��
	[���̓v���O�C���D��x�̐ݒ�] �ɂēK�؂ȗD��x��ݒ肵�ĉ������B
	
	DirectShow File Reader �� MP4 File Reader �Ƃ������A
	�������d������\���̂�����̓v���O�C���𓱓�����Ă�����ł͂Ƃ��ɒ��ӂ��K�v�ł��B

�E�t���[�����[�g������Ɏ擾�ł��Ȃ��P�[�X�i���݂͂��Ȃ���P����Ă��܂��j
	TS ���A�ꕔ�̃R���e�i�Ńt���[�����[�g������Ɏ擾�ł��Ȃ��P�[�X���H�ɂ���܂��B
	�ǂݍ���ł���u�ҏW�v���u�Đ����x�̏���ύX�v�Ŗ{���̃t���[�����[�g���w�肷�邩�A
	�t�@�C���ǂݍ��݁i�u�t�@�C���v���u�J���v�j���Ƀt���[�����[�g���w�肵�ĊJ���Ă��������B
	
	�σt���[�����[�g�iVFR�j�̃f�[�^�� VFR->CFR �ϊ���L���ɂ��ēǂݍ��ނ��Ƃ��������Ă݂Ă��������B
	
	�V�X�e���ݒ�Łu���[�h����29.97fps�ɋ߂����͎̂����I��29.97fps�ɕϊ�����v��
	���p�����i������܂����A29.97fps�Ƃ͔����ɈقȂ�t���[�����[�g�̉f����
	�Ӑ}��������ɓǂݍ��߂Ȃ��Ȃ�f�����b�g������܂��̂ŁA�����Ƃ��Ă͂��܂萄���ł��܂���B
	
	�f���̃t���[�����[�g���m�F�������ꍇ��
	MediaInfo https://mediaarea.net/ja/MediaInfo ���������p���������B

�E�ŏ��̓ǂݍ��݂Ɏ��Ԃ̂�����P�[�X
	�T�C�Y�̑傫�ȃt�@�C���⑍�t���[�����̑����t�@�C�����ŏ��ɓǂݍ��ލہA
	�t�@�C���T�[�`�Ɏ��Ԃ������薳�����Ɍ�����P�[�X������܂����A
	2�x�ڈȍ~�̓ǂݍ��݂ł� index �t�@�C��(.lwi)�̏������ɓǂݍ��ނ��ߎ��Ԃ͂�����܂���B



�y�C���E���L�����z

avi ����� divx �R���e�i�Ɋi�[���ꂽ�ꕔ����ɂ�����

	�E����ɓW�J�ł��Ȃ�
	�E�V�[�N����Ɖf���Ɖ����̓����������

���̌��ۂ��m�F���Ă���A�ُ���m�F�����ꍇ�� AVI/AVI2 File Reader �ɂēǂݍ���ł��������B
���̍ۂ͓���Ɏg�p�����R�[�f�b�N(�f�R�[�_)��ʓr�C���X�g�[������K�v������܂��B



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
	libopus 1.3.1					https://opus-codec.org/
	libopencore-amr 0.1.5			https://sourceforge.net/projects/opencore-amr/
	libgme 0.6.2					https://bitbucket.org/mpyne/game-music-emu/wiki/Home
	libgme 0.6.2-1(MSVC)			https://github.com/ShiftMediaProject/game-music-emu
	libvpx v1.8.2					https://github.com/webmproject/libvpx
	mfx_dispatch 1.25				https://github.com/lu-zero/mfx_dispatch
	zlib 1.2.11						https://www.zlib.net/

	�r���h�Ɏg�p���� L-SMASH Works�AL-SMASH�Affmpeg �̃\�[�X�R�[�h�͈ȉ�������擾�ł��܂�
	https://pop.4-bit.jp/bin/l-smash/L-SMASH_Works_r940_sourcecodes.tar.bz2



�y�ӎ��z
	�����̋@�\���������邽�� OSS �̐��_�ɑ���J������܂���
	VFR-maniac�imuken�j�����͂��߂Ƃ���e���C�u�����̍�җl
	����� AviUtl SDK �̃��C�Z���X�𖾊m�ɂ��邽�ߑ��}�ɑΏ�
	��������܂����j�d�m���񎁂ɐ[�����ӂ̈ӂ�\���グ�܂��B



�y�r���h�����l�z
	POPn
	RePOPn https://pop.4-bit.jp

====================================================================================================

�y�X�V�����z
L-SMASH Works �\�[�X�R�[�h�̍X�V������ changelog.txt ��������������
