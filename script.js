/**
 * MINIGAME 20-10: BAY CÙNG NÀNG THƠ (FLAPPY BIRD STYLE)
 * - 5 Hộp quà bí mật (Mystery Boxes) xuất hiện trên đường bay
 * - Nhặt quà mở ra thư nhỏ và tạm dừng game để đọc
 * - 10 Bức tâm thư ngọt ngào dành riêng cho bạn gái cùng tuổi / crush / bạn thân
 * - Về đích chỉ hiển thị duy nhất 1 bức tâm thư đặc biệt!
 */

// ========================================================
// 1. DATA: LỜI CHÚC THƯ NHỎ DÀNH CHO BẠN GÁI CÙNG TUỔI
// ========================================================
const PEER_MINI_WISHES = [
  "Chúc cậu ngày 20/10 luôn xinh tươi, rạng rỡ, cười nhiều và bớt overthinking lại nha! ✨",
  "Mong cậu ăn bao nhiêu món ngon cũng không lo tăng cân, trà sữa luôn được tặng full topping! 🧋",
  "Chúc cậu mỗi ngày đến trường hay đi làm đều ngập tràn niềm vui, áp lực tự tan biến như bong bóng! 🌸✨",
  "Mong cậu luôn tự tin, kiêu hãnh và yêu thương bản thân, vì cậu là cô gái cực kỳ đặc biệt! 👑",
  "Chúc túi tiền của cậu luôn rủng rỉnh, shopping thả ga không cần nhìn giá! 🛍️💖",
  "Nụ cười của cậu rất xinh và tỏa nắng, hãy luôn cười thật tươi mỗi ngày nhé! 😊🌹",
  "Chúc mọi kỳ thi hay kế hoạch của cậu đều đạt kết quả xuất sắc, làm việc gì cũng may mắn hanh thông! 🌟",
  "Chúc cậu ngày 20/10 nhận được thật nhiều hoa, nhiều quà và ngập tràn tình yêu thương! 🎁💐"
];

// ========================================================
// 2. DATA: 10 BỨC TÂM THƯ LỚN GỬI BẠN GÁI CÙNG TUỔI (NGỌT NGÀO, ĐỜI THƯỜNG)
// ========================================================
const PEER_GRAND_LETTERS = [
  {
    topic: "Gửi Nàng Thơ Tuổi Đôi Mươi Rạng Rỡ 🌸",
    perk: "Đặc quyền 20/10: 01 Chầu trà sữa full topping bất cứ khi nào cậu thèm!",
    body: `
      Gửi cô bạn đáng yêu của tớ,<br><br>
      Nhân ngày 20/10, tớ chúc cậu luôn giữ được nụ cười tươi tắn và năng lượng tích cực như ánh mặt trời buổi sớm mai. 
      Ở độ tuổi đẹp nhất của thanh xuân này, mong cậu luôn tự tin theo đuổi những ước mơ của mình, can đảm trải nghiệm và luôn tự hào về chính bản thân.<br><br>
      Cậu sinh ra đã là một bông hoa độc nhất vô nhị rồi, chẳng cần phải so sánh mình với bất kỳ ai khác đâu. Chúc cậu có một ngày 20/10 ngập tràn niềm vui, hoa và quà nhé!
    `
  },
  {
    topic: "Gửi Cô Bạn Thân Tri Kỷ Cùng Đi Qua Thanh Xuân 👯‍♀️",
    perk: "Đặc quyền 20/10: Được bao trọn gói 1 bữa ăn vặt chém gió thâu đêm!",
    body: `
      Gửi con bạn thân cùng tuổi,<br><br>
      Thật may mắn vì những năm tháng thanh xuân này có một người bạn cùng tuổi như cậu ở bên. Cùng nhau đi ăn ốc, cùng uống trà sữa, cùng than thở về bài tập rồi lại cười ngặt nghẽo vì những chuyện vu vơ.<br><br>
      20/10 này, chúc cậu luôn xinh đẹp rạng ngời, sớm có người thương cưng chiều hết nấc, nhưng dù có thế nào thì cũng không được quên đứa bạn này đâu đấy! Mãi là bạn thân tốt nhất của nhau nhé!
    `
  },
  {
    topic: "Gửi Nàng Cú Đêm Đam Mê Trà Sữa & Đồ Ăn Ngon 🧋",
    perk: "Đặc quyền 20/10: Ăn cả thế giới vẫn giữ dáng chuẩn eo thon!",
    body: `
      Gửi cô gái luôn có một chiếc bụng đói đáng yêu,<br><br>
      Chúc cậu một ngày 20/10 thật ngọt ngào như ly trà sữa 100% đường nhiều trân châu vậy! Mong cậu bớt thức khuya lại một chút, chăm sóc cho làn da luôn căng bóng mịn màng.<br><br>
      Chúc cậu cuộc sống lúc nào cũng ngập tràn những món ngon, ăn hoài không béo, và mỗi ngày trôi qua đều là những trải nghiệm vui vẻ, thú vị!
    `
  },
  {
    topic: "Gửi Cô Bạn Cùng Lớp / Cùng Khóa Siêu Đáng Yêu 📚",
    perk: "Đặc quyền 20/10: Thi cử toàn điểm cao, mọi dự định đều thành công rực rỡ!",
    body: `
      Chào bạn cùng tuổi,<br><br>
      Nhân ngày Phụ nữ Việt Nam 20-10, chúc bạn luôn giữ được sự năng động, thông minh và duyên dáng. Những buổi học hay làm việc nhóm cùng bạn luôn khiến mọi thứ trở nên nhẹ nhàng và tràn đầy tiếng cười.<br><br>
      Chúc bạn gặt hái được thật nhiều thành tích xuất sắc, đạt được những mục tiêu lớn mà bạn đang ấp ủ và luôn là cô gái tỏa sáng nhất nhé!
    `
  },
  {
    topic: "Gửi Cô Gái Luôn Mang Lại Sự Ấm Áp & Dịu Dàng 🍃",
    perk: "Đặc quyền 20/10: Được cuộc đời đối xử bằng tất cả sự dịu êm và cưng chiều!",
    body: `
      Gửi cậu - người bạn dịu êm,<br><br>
      Có những người chỉ cần mỉm cười một cái thôi là đủ khiến bầu trời xung quanh bừng sáng, và cậu chính là một người như vậy. Sự ân cần, chân thành và tinh tế của cậu luôn khiến mọi người cảm thấy thật bình yên khi ở cạnh.<br><br>
      Chúc cậu ngày 20/10 luôn được che chở, yêu thương, gặp nhiều may mắn và luôn tìm thấy niềm hạnh phúc giản đơn trong cuộc sống mỗi ngày!
    `
  },
  {
    topic: "Gửi Cô Nàng Bản Lĩnh, Độc Lập & Cá Tính ✨",
    perk: "Đặc quyền 20/10: Tự chủ tài chính, vi vu du lịch khắp bốn phương!",
    body: `
      Gửi cô gái đầy khí chất,<br><br>
      Tớ luôn rất ngưỡng mộ sự độc lập, cá tính và phong thái tự tin của cậu. Cậu luôn biết mình muốn gì và nỗ lực hết mình để đạt được điều đó. Đó là nét đẹp quyến rũ và đáng nể nhất của phái đẹp thời hiện đại.<br><br>
      Chúc cậu tuổi trẻ rực rỡ, con đường phía trước rộng mở thênh thang, tự mua cho mình những món đồ yêu thích và luôn kiêu hãnh bước đi trên con đường của chính mình!
    `
  },
  {
    topic: "Gửi Crush Cùng Tuổi Khiến Tim Ai Đó Lỡ Nhịp 💖",
    perk: "Đặc quyền 20/10: Luôn có một người âm thầm lắng nghe và quan tâm cậu!",
    body: `
      Gửi cô gái đặc biệt,<br><br>
      Hôm nay là 20/10, tớ muốn gửi đến cậu lời chúc chân thành và ấm áp nhất. Chúc cậu mỗi sớm mai thức dậy đều có thật nhiều lý do để mỉm cười, mọi điều ước hôm nay đều sẽ thành hiện thực.<br><br>
      Mong rằng cậu sẽ luôn cảm nhận được sự quan tâm chân thành từ những người xung quanh, và biết rằng trong mắt ai đó, cậu luôn là người con gái dễ thương và cuốn hút nhất!
    `
  },
  {
    topic: "Gửi Cô Gái Có Nụ Cười Tỏa Nắng & Tinh Tế ☀️",
    perk: "Đặc quyền 20/10: Được nhường nhịn, yêu thương và nuông chiều tối đa!",
    body: `
      Gửi cô bạn cùng tuổi có nụ cười siêu ngọt ngào,<br><br>
      Mỗi lần nhìn thấy nụ cười của cậu là bao nhiêu mệt mỏi trong ngày dường như tan biến hết. Cậu luôn mang lại một nguồn năng lượng trong trẻo, vui tươi khiến ai ở cạnh cũng cảm thấy dễ chịu và ấm lòng.<br><br>
      Nhân ngày 20/10, tớ chúc cậu luôn giữ mãi nét tươi tắn ấy, mỗi ngày trôi qua đều là những khoảnh khắc dịu dàng, hạnh phúc và luôn có người thương yêu, chở che nhé!
    `
  },
  {
    topic: "Gửi Bạn Nữ Mê Du Lịch & Khám Phá Cuộc Sống ✈️",
    perk: "Đặc quyền 20/10: Đi muôn nơi ngắm cảnh đẹp, chụp ngàn tấm ảnh lung linh!",
    body: `
      Gửi đôi chân không biết mỏi,<br><br>
      Chúc cậu một ngày 20/10 rực rỡ sắc màu! Mong đôi chân của cậu sẽ đưa cậu đến thật nhiều vùng đất mới tuyệt đẹp, chụp được ngàn tấm ảnh lung linh và gom góp thêm nhiều kỷ niệm đáng nhớ của tuổi thanh xuân.<br><br>
      Chúc cậu luôn khỏe mạnh, tràn đầy nhiệt huyết và luôn có những người bạn đồng hành tuyệt vời trên mỗi chuyến đi!
    `
  },
  {
    topic: "Gửi Cô Gái Đáng Yêu Nhất Ngày 20-10 🌹",
    perk: "Đặc quyền 20/10: Suốt 365 ngày đều được nâng niu và hạnh phúc trọn vẹn!",
    body: `
      Gửi cô bạn cùng tuổi tuyệt vời,<br><br>
      Ngày 20/10 này là dịp để nhắc nhở cậu rằng: Cậu luôn xứng đáng với những điều tốt đẹp và ngọt ngào nhất trên thế giới này. Dù cuộc sống đôi lúc có chút áp lực, hãy luôn nhớ mỉm cười và hít thở thật sâu nhé.<br><br>
      Chúc cậu một ngày ngập tràn hoa hồng, quà tặng và niềm vui rộn rã! Chúc mừng ngày Phụ nữ Việt Nam 20-10! 🎉💖
    `
  }
];

// ========================================================
// 3. FLAPPY BIRD 20-10 ENGINE
// ========================================================
class Flappy2010Game {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');

    this.WIDTH = 400;
    this.HEIGHT = 700;

    this.state = 'START';
    this.recipientName = 'Bạn';
    this.isPaused = false;

    // Flight Physics (Floaty, relaxing pace for a 2-minute journey)
    this.gravity = 0.16;
    this.flapStrength = -4.2;
    this.speed = 1.55;

    // Player (Cute flying fairy/girl)
    this.bird = {
      x: 90,
      y: 350,
      width: 44,
      height: 44,
      vy: 0,
      rotation: 0,
      wingTimer: 0
    };

    // 3-Hearts Life System
    this.maxHearts = 3;
    this.hearts = 3;
    this.invulnerableTimer = 0;

    // Skills
    this.shieldTimer = 0; // Invincible against pillars

    // Level progression (~2 minutes game time with reading stops)
    this.distance = 0;
    this.GOAL_DISTANCE = 9800;
    this.score = 0;

    // Pillars & Mystery Boxes
    this.pillars = [];
    this.mysteryBoxes = [];
    this.maxBoxes = 5;
    this.boxesSpawned = 0;
    this.collectedBoxesCount = 0;
    this.castle = null;

    // Parallax background decor
    this.clouds = [];
    this.floatingBalloons = [];

    this.animId = null;
    this.lastTime = 0;

    this.initDOMElements();
    this.setupListeners();
    this.initDecor();
  }

  initDOMElements() {
    this.screens = {
      start: document.getElementById('startScreen'),
      game: document.getElementById('gameScreen'),
      victory: document.getElementById('victoryScreen')
    };

    this.recipientInput = document.getElementById('recipientInput');
    this.randomNameBtn = document.getElementById('randomNameBtn');
    this.startGameBtn = document.getElementById('startGameBtn');
    this.toggleSoundBtn = document.getElementById('toggleSoundBtn');
    this.soundStatusIcon = document.getElementById('soundStatusIcon');

    // HUD
    this.heartsVal = document.getElementById('heartsVal');
    this.collectedGiftsVal = document.getElementById('collectedGiftsVal');
    this.distancePercent = document.getElementById('distancePercent');
    this.trackFill = document.getElementById('trackFill');
    this.runnerMiniIcon = document.getElementById('runnerMiniIcon');
    this.scoreVal = document.getElementById('scoreVal');
    this.activeSkillsBar = document.getElementById('activeSkillsBar');

    // Mystery Pause Modal
    this.miniLetterPauseModal = document.getElementById('miniLetterPauseModal');
    this.pauseBoxIcon = document.getElementById('pauseBoxIcon');
    this.pauseLetterTag = document.getElementById('pauseLetterTag');
    this.pauseLetterMsg = document.getElementById('pauseLetterMsg');
    this.resumeRunBtn = document.getElementById('resumeRunBtn');

    // Game Over Modal
    this.gameOverModal = document.getElementById('gameOverModal');
    this.gameOverName = document.getElementById('gameOverName');
    this.retryBtn = document.getElementById('retryBtn');

    // Victory Elements
    this.victoryRecipientName = document.getElementById('victoryRecipientName');
    this.letterIndexBadge = document.getElementById('letterIndexBadge');
    this.letterTopic = document.getElementById('letterTopic');
    this.letterRecipientTarget = document.getElementById('letterRecipientTarget');
    this.letterBodyText = document.getElementById('letterBodyText');
    this.letterPerkText = document.getElementById('letterPerkText');
    this.copyGrandWishBtn = document.getElementById('copyGrandWishBtn');
    this.celebrateConfettiBtn = document.getElementById('celebrateConfettiBtn');
    this.playAgainBtn = document.getElementById('playAgainBtn');

    // Toast
    this.appToast = document.getElementById('appToast');
    this.activeGrandLetterIdx = 0;
  }

  setupListeners() {
    // Suggest cute names for peer female friends
    const names = ['Linh', 'Trang', 'Mai', 'Ngọc', 'Phương', 'Hà', 'Hạnh', 'Vy', 'Cún Con', 'Nàng Thơ'];
    this.randomNameBtn.addEventListener('click', () => {
      const rand = names[Math.floor(Math.random() * names.length)];
      this.recipientInput.value = rand;
      this.showToast(`Đã chọn tên: ${rand} 🌷`);
    });

    // Start
    this.startGameBtn.addEventListener('click', () => {
      const val = this.recipientInput.value.trim();
      this.recipientName = val || 'Cậu';
      this.startNewGame();
    });

    // Flap Inputs: Space, ArrowUp, W
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
        e.preventDefault();
        if (this.state === 'GAMEOVER') {
          this.gameOverModal.classList.remove('active');
          this.startNewGame();
        } else if (this.isPaused) {
          this.resumeGame();
        } else if (this.state === 'PLAYING') {
          this.doFlap();
        }
      }
    });

    // Tap/Click on Canvas & Game View for Thumb friendly Mobile Play
    const handleScreenTap = (e) => {
      // Prevent bubbling to unwanted controls
      if (e.target && (e.target.closest('button') || e.target.closest('input'))) return;
      if (this.state === 'GAMEOVER') {
        this.gameOverModal.classList.remove('active');
        this.startNewGame();
      } else if (this.isPaused) {
        this.resumeGame();
      } else if (this.state === 'PLAYING') {
        this.doFlap();
      }
    };

    this.canvas.addEventListener('pointerdown', handleScreenTap);
    const canvasWrap = document.getElementById('canvasWrapper');
    if (canvasWrap) {
      canvasWrap.addEventListener('pointerdown', handleScreenTap);
    }

    this.resumeRunBtn.addEventListener('click', () => {
      this.resumeGame();
    });

    this.retryBtn.addEventListener('click', () => {
      this.gameOverModal.classList.remove('active');
      this.startNewGame();
    });

    // Sound toggle
    this.toggleSoundBtn.addEventListener('click', () => {
      const enabled = window.soundEngine.toggle();
      this.soundStatusIcon.textContent = enabled ? '🔊' : '🔇';
      this.showToast(enabled ? 'Đã bật âm thanh 🎵' : 'Đã tắt âm thanh 🔇');
    });

    this.copyGrandWishBtn.addEventListener('click', () => {
      const letter = PEER_GRAND_LETTERS[this.activeGrandLetterIdx];
      const cleanBody = letter.body.replace(/<br\s*[\/]?>/gi, "\n").replace(/<[^>]+>/g, "");
      const fullText = `💌 ${letter.topic} 💌\nThân gửi: ${this.recipientName}\n\n${cleanBody}\n\n✨ Chúc mừng ngày Phụ nữ Việt Nam 20-10! ✨`;
      navigator.clipboard.writeText(fullText).then(() => {
        this.showToast('Đã sao chép bức thư vào clipboard! 📋💌');
      });
    });

    this.celebrateConfettiBtn.addEventListener('click', () => {
      this.launchVictoryConfetti();
      window.soundEngine.playBoxOpen();
    });

    this.playAgainBtn.addEventListener('click', () => {
      this.switchScreen('start');
    });
  }

  showToast(msg) {
    this.appToast.textContent = msg;
    this.appToast.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.appToast.classList.remove('show');
    }, 2400);
  }

  switchScreen(screenName) {
    Object.values(this.screens).forEach(s => s.classList.remove('active'));
    this.screens[screenName].classList.add('active');
    this.state = screenName.toUpperCase();
  }

  initDecor() {
    this.clouds = [
      { x: 60, y: 90, scale: 0.9, speed: 0.3 },
      { x: 260, y: 150, scale: 0.8, speed: 0.22 },
      { x: 380, y: 70, scale: 1.1, speed: 0.28 }
    ];
  }

  // ========================================================
  // START NEW FLAPPY BIRD RUN (PORTRAIT MOBILE)
  // ========================================================
  startNewGame() {
    this.distance = 0;
    this.score = 0;
    this.pillars = [];
    this.mysteryBoxes = [];
    this.boxesSpawned = 0;
    this.collectedBoxesCount = 0;
    this.shieldTimer = 0;
    this.castle = null;

    // Reset 3 Hearts & Invulnerability
    this.hearts = 3;
    this.invulnerableTimer = 0;

    // Reset Bird (Centrally placed vertically)
    this.bird.x = 90;
    this.bird.y = 350;
    this.bird.vy = 0;
    this.bird.rotation = 0;

    this.isPaused = false;
    this.miniLetterPauseModal.classList.remove('active');
    this.gameOverModal.classList.remove('active');

    this.updateHUD();
    this.switchScreen('game');
    this.state = 'PLAYING';

    window.soundEngine.startBgm();

    this.lastTime = performance.now();
    if (this.animId) cancelAnimationFrame(this.animId);
    this.animId = requestAnimationFrame((t) => this.loop(t));
  }

  doFlap() {
    this.bird.vy = this.flapStrength;
    this.bird.rotation = -0.22; // Gentle slight tilt up
    window.soundEngine.playFlap();

    // Hide tap hint on first flap
    const hint = document.getElementById('flapTouchHint');
    if (hint) hint.style.display = 'none';
  }

  // ========================================================
  // PILLARS & UNIFIED MYSTERY GIFT BOXES GENERATOR (PORTRAIT)
  // ========================================================
  updateSpawns() {
    // Castle at finish
    if (this.distance >= this.GOAL_DISTANCE - 400 && !this.castle) {
      this.castle = {
        x: this.WIDTH + 50,
        y: 280,
        width: 180,
        height: 420,
        reached: false
      };
    }

    if (this.distance >= this.GOAL_DISTANCE - 350) return;

    // Chướng ngại vật cách xa nhau hơn theo chiều ngang (480px - rất thoáng và dễ chịu)
    const minPillarDist = 480;
    const lastPillar = this.pillars[this.pillars.length - 1];

    if (!lastPillar || (this.WIDTH + 30 - lastPillar.x > minPillarDist)) {
      const gapHeight = 200; // Khoảng trống an toàn, rộng rãi cho bạn nữ chơi thoải mái
      const minHeight = 70;
      const maxHeight = this.HEIGHT - gapHeight - 80;
      const topHeight = minHeight + Math.random() * (maxHeight - minHeight);
      const bottomY = topHeight + gapHeight;

      const newPillar = {
        x: this.WIDTH + 30,
        width: 56,
        topHeight: topHeight,
        bottomY: bottomY,
        bottomHeight: this.HEIGHT - bottomY,
        passed: false
      };
      this.pillars.push(newPillar);

      // Phân bổ đều 5 Hộp Quà Bí Ẩn qua suốt chặng bay 2 phút (mỗi ~1600-1800px một hộp)
      const targetMilestone = (this.boxesSpawned + 1) * (this.GOAL_DISTANCE / (this.maxBoxes + 1));
      if (this.boxesSpawned < this.maxBoxes && this.distance >= targetMilestone - 500) {
        this.boxesSpawned++;
        this.mysteryBoxes.push({
          x: newPillar.x + 10,
          y: topHeight + (gapHeight / 2) - 18,
          width: 36,
          height: 36,
          boxIndex: this.boxesSpawned,
          bobOffset: Math.random() * Math.PI * 2
        });
      }
    }
  }

  // ========================================================
  // GAME LOOP
  // ========================================================
  loop(timestamp) {
    const dt = (timestamp - this.lastTime) / 1000;
    this.lastTime = timestamp;

    if (this.state === 'PLAYING') {
      if (!this.isPaused) {
        this.update(dt);
        this.render();
      }
      this.animId = requestAnimationFrame((t) => this.loop(t));
    }
  }

  update(dt) {
    this.distance += this.speed;
    this.bird.wingTimer += 0.12; // Graceful wing flutter

    // Float physics: cap max falling speed to 2.2px/frame so it never drops fast!
    this.bird.vy = Math.min(2.2, this.bird.vy + this.gravity);
    this.bird.vy = Math.max(-3.5, this.bird.vy);
    this.bird.y += this.bird.vy;

    // Smooth, gentle rotation
    const targetRotation = this.bird.vy > 0 ? 0.35 : -0.22;
    this.bird.rotation += (targetRotation - this.bird.rotation) * 0.08;

    // Keep bird in bounds gently
    if (this.bird.y < 20) {
      this.bird.y = 20;
      this.bird.vy = 0;
    }
    if (this.bird.y > this.HEIGHT - 50) {
      this.bird.y = this.HEIGHT - 50;
      this.bird.vy = 0;
    }

    if (this.shieldTimer > 0) this.shieldTimer--;
    if (this.invulnerableTimer > 0) this.invulnerableTimer--;

    // Update clouds
    this.clouds.forEach(c => {
      c.x -= c.speed * 0.7;
      if (c.x < -160) c.x = this.WIDTH + 60;
    });

    this.updateSpawns();

    // Update Pillars
    const birdBox = { x: this.bird.x - 14, y: this.bird.y - 14, w: 28, h: 28 };

    for (let i = this.pillars.length - 1; i >= 0; i--) {
      const p = this.pillars[i];
      p.x -= this.speed;

      // Score on passing pillar
      if (!p.passed && p.x + p.width < this.bird.x) {
        p.passed = true;
        this.score += 10;
      }

      // Check collision with top or bottom pillar
      const topRect = { x: p.x, y: 0, w: p.width, h: p.topHeight };
      const bottomRect = { x: p.x, y: p.bottomY, w: p.width, h: p.bottomHeight };

      if (this.checkOverlap(birdBox, topRect) || this.checkOverlap(birdBox, bottomRect)) {
        if (this.shieldTimer > 0) {
          // Shield protects
          window.soundEngine.playTone(600, 'sine', 0.1, 0.1);
        } else if (this.invulnerableTimer === 0) {
          // Lose 1 Heart!
          this.hearts--;
          this.invulnerableTimer = 85; // ~1.4s invulnerability
          this.bird.vy = -2.2; // Gentle soft bounce
          window.soundEngine.playHit();
          this.updateHUD();

          // If all 3 hearts are lost, Game Over!
          if (this.hearts <= 0) {
            this.triggerGameOver();
            return;
          }
        }
      }

      if (p.x < -80) {
        this.pillars.splice(i, 1);
      }
    }

    // Update Mystery Gift Boxes
    for (let i = this.mysteryBoxes.length - 1; i >= 0; i--) {
      const box = this.mysteryBoxes[i];
      box.x -= this.speed;
      box.bobOffset += 0.08;

      const bobY = box.y + Math.sin(box.bobOffset) * 5;
      const boxRect = { x: box.x, y: bobY, w: box.width, h: box.height };

      if (this.checkOverlap(birdBox, boxRect)) {
        this.openMysteryBox(box.boxIndex);
        this.mysteryBoxes.splice(i, 1);
        continue;
      }

      if (box.x < -60) {
        this.mysteryBoxes.splice(i, 1);
      }
    }

    // Castle
    if (this.castle) {
      this.castle.x -= this.speed;
      if (this.bird.x >= this.castle.x + 60 && !this.castle.reached) {
        this.castle.reached = true;
        this.triggerVictory();
      }
    }

    this.updateHUD();
  }

  checkOverlap(r1, r2) {
    return (
      r1.x < r2.x + r2.w &&
      r1.x + r1.w > r2.x &&
      r1.y < r2.y + r2.h &&
      r1.y + r1.h > r2.y
    );
  }

  // ========================================================
  // OPEN MYSTERY BOX (SURPRISE LETTER OR POWER-UP!)
  // ========================================================
  openMysteryBox(boxNum) {
    this.collectedBoxesCount++;
    this.score += 50;

    // Box 3 gives a protective Flower Shield skill
    if (boxNum === 3) {
      this.shieldTimer = 300; // 5s protection
      this.pauseBoxIcon.textContent = '🛡️';
      this.pauseLetterTag.textContent = 'HỘP QUÀ KỸ NĂNG: LÁ CHẮN HOA HỒNG!';
      this.pauseLetterMsg.textContent = `Tặng ${this.recipientName} chiếc khiên hoa hồng bảo vệ! Miễn nhiễm mọi chướng ngại vật trong 5 giây!`;
      this.miniLetterPauseModal.classList.add('active');
      this.isPaused = true;
      window.soundEngine.playSkillActivate();
      return;
    }

    // Other boxes reveal sweet mini wishes
    const wishIndex = (boxNum - 1) % PEER_MINI_WISHES.length;
    const wish = PEER_MINI_WISHES[wishIndex];

    this.pauseBoxIcon.textContent = '💌';
    this.pauseLetterTag.textContent = `HỘP QUÀ #${this.collectedBoxesCount} / ${this.maxBoxes} MỞ RA!`;
    this.pauseLetterMsg.textContent = wish;
    this.miniLetterPauseModal.classList.add('active');
    this.isPaused = true;
    window.soundEngine.playBoxOpen();
  }

  resumeGame() {
    if (!this.isPaused) return;
    this.isPaused = false;
    this.miniLetterPauseModal.classList.remove('active');
    this.lastTime = performance.now();
    this.doFlap(); // Give a little flap on resume
  }

  updateHUD() {
    // 3 Hearts display: ❤️❤️❤️ / ❤️❤️🤍 / ❤️🤍🤍 / 🤍🤍🤍
    if (this.heartsVal) {
      this.heartsVal.textContent = '❤️'.repeat(Math.max(0, this.hearts)) + '🤍'.repeat(Math.max(0, 3 - this.hearts));
    }
    this.collectedGiftsVal.textContent = `${this.collectedBoxesCount}/${this.maxBoxes}`;
    this.scoreVal.textContent = this.score;

    const pct = Math.min(100, Math.floor((this.distance / this.GOAL_DISTANCE) * 100));
    this.distancePercent.textContent = `${pct}%`;
    this.trackFill.style.width = `${pct}%`;
    this.runnerMiniIcon.style.left = `${pct}%`;

    if (this.shieldTimer > 0) {
      this.activeSkillsBar.innerHTML = `<span class="active-skill-badge">🛡️ Lá Chắn Hoa Hồng (${Math.ceil(this.shieldTimer / 60)}s)</span>`;
    } else {
      this.activeSkillsBar.innerHTML = '';
    }
  }

  triggerGameOver() {
    this.state = 'GAMEOVER';
    window.soundEngine.stopBgm();
    window.soundEngine.playTone(180, 'sawtooth', 0.45, 0.15);
    this.gameOverName.textContent = this.recipientName;
    this.gameOverModal.classList.add('active');
  }

  // ========================================================
  // RENDER GRAPHICS
  // ========================================================
  render() {
    this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);

    // 1. Sky Gradient
    const sky = this.ctx.createLinearGradient(0, 0, 0, this.HEIGHT);
    sky.addColorStop(0, '#ffd3e2');
    sky.addColorStop(0.5, '#ffeef5');
    sky.addColorStop(1, '#ffffff');
    this.ctx.fillStyle = sky;
    this.ctx.fillRect(0, 0, this.WIDTH, this.HEIGHT);

    // 2. Clouds
    this.clouds.forEach(c => {
      this.renderCloud(c.x, c.y, c.scale);
    });

    // 3. Castle at the finish line
    if (this.castle) {
      this.renderCastle(this.castle.x, this.castle.y);
    }

    // 4. Pillars (Romantic pastel flower pillars)
    this.pillars.forEach(p => {
      this.renderPillar(p);
    });

    // 5. Mystery Gift Boxes (🎁 Glowing)
    this.mysteryBoxes.forEach(b => {
      const bob = Math.sin(b.bobOffset) * 5;
      this.renderGiftBox(b.x, b.y + bob, b.width, b.height);
    });

    // 6. Flying Player (Nàng Thơ)
    this.renderBird();
  }

  renderCloud(x, y, s) {
    this.ctx.save();
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    this.ctx.beginPath();
    this.ctx.arc(x, y, 22 * s, 0, Math.PI * 2);
    this.ctx.arc(x + 22 * s, y - 8 * s, 26 * s, 0, Math.PI * 2);
    this.ctx.arc(x + 46 * s, y, 22 * s, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }

  renderPillar(p) {
    this.ctx.save();
    // Soft pastel rose columns with ivy/flower details
    const pillarGrad = this.ctx.createLinearGradient(p.x, 0, p.x + p.width, 0);
    pillarGrad.addColorStop(0, '#ff9bb5');
    pillarGrad.addColorStop(0.5, '#ffb8cb');
    pillarGrad.addColorStop(1, '#ff8aa6');

    // Top Pillar
    this.ctx.fillStyle = pillarGrad;
    this.ctx.strokeStyle = '#ff6b8b';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(p.x, 0, p.width, p.topHeight);
    this.ctx.strokeRect(p.x, 0, p.width, p.topHeight);

    // Top Pillar Cap
    this.ctx.fillStyle = '#ff6b8b';
    this.ctx.fillRect(p.x - 4, p.topHeight - 16, p.width + 8, 16);

    // Bottom Pillar
    this.ctx.fillStyle = pillarGrad;
    this.ctx.fillRect(p.x, p.bottomY, p.width, p.bottomHeight);
    this.ctx.strokeRect(p.x, p.bottomY, p.width, p.bottomHeight);

    // Bottom Pillar Cap
    this.ctx.fillStyle = '#ff6b8b';
    this.ctx.fillRect(p.x - 4, p.bottomY, p.width + 8, 16);

    // Cute rose emoji on caps
    this.ctx.font = '16px Nunito';
    this.ctx.fillText('🌹', p.x + p.width / 2 - 8, p.topHeight - 2);
    this.ctx.fillText('🌹', p.x + p.width / 2 - 8, p.bottomY + 14);

    this.ctx.restore();
  }

  renderGiftBox(x, y, w, h) {
    this.ctx.save();
    // Glowing golden/pink mystery gift box
    this.ctx.shadowColor = 'rgba(255, 51, 102, 0.6)';
    this.ctx.shadowBlur = 15;

    // Draw Emoji Gift
    this.ctx.font = '34px Apple Color Emoji, Segoe UI Emoji';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText('🎁', x + w / 2, y + h / 2);

    this.ctx.restore();
  }

  renderBird() {
    this.ctx.save();
    this.ctx.translate(this.bird.x, this.bird.y);
    this.ctx.rotate(this.bird.rotation);

    // Damage flicker when invulnerable
    if (this.invulnerableTimer > 0 && Math.floor(this.invulnerableTimer / 6) % 2 === 0) {
      this.ctx.globalAlpha = 0.35;
    }

    // Shield Aura if active
    if (this.shieldTimer > 0) {
      this.ctx.strokeStyle = '#ffd166';
      this.ctx.lineWidth = 3.5;
      this.ctx.beginPath();
      this.ctx.arc(0, 0, 32, 0, Math.PI * 2);
      this.ctx.stroke();
    }

    // Cute flying girl / fairy with animated wings
    const wingFlap = Math.sin(this.bird.wingTimer) * 12;

    // Wing behind
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    this.ctx.beginPath();
    this.ctx.ellipse(-14, -6 + wingFlap, 14, 8, -0.4, 0, Math.PI * 2);
    this.ctx.fill();

    // Body (Pink dress)
    this.ctx.fillStyle = '#ff4d79';
    this.ctx.beginPath();
    this.ctx.ellipse(0, 4, 12, 14, 0, 0, Math.PI * 2);
    this.ctx.fill();

    // Head
    this.ctx.fillStyle = '#ffdfcb';
    this.ctx.beginPath();
    this.ctx.arc(6, -8, 12, 0, Math.PI * 2);
    this.ctx.fill();

    // Brown hair with flower
    this.ctx.fillStyle = '#5c2c16';
    this.ctx.beginPath();
    this.ctx.arc(4, -10, 12, Math.PI * 0.7, Math.PI * 1.9);
    this.ctx.fill();

    // Flower accessory
    this.ctx.fillStyle = '#ffffff';
    this.ctx.beginPath();
    this.ctx.arc(0, -14, 4, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.fillStyle = '#ff3366';
    this.ctx.beginPath();
    this.ctx.arc(0, -14, 2, 0, Math.PI * 2);
    this.ctx.fill();

    // Eye
    this.ctx.fillStyle = '#2b111c';
    this.ctx.beginPath();
    this.ctx.arc(10, -8, 2, 0, Math.PI * 2);
    this.ctx.fill();

    // Front Wing
    this.ctx.fillStyle = '#ffffff';
    this.ctx.beginPath();
    this.ctx.ellipse(-6, -2 - wingFlap, 16, 9, 0.3, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.restore();
  }

  renderCastle(x, y) {
    this.ctx.save();
    // Base castle building down to bottom
    this.ctx.fillStyle = '#ffb3c6';
    this.ctx.fillRect(x + 25, y + 60, 170, this.HEIGHT - (y + 60));

    // Left tower
    this.ctx.fillStyle = '#ff8da1';
    this.ctx.fillRect(x, y, 45, this.HEIGHT - y);
    // Right tower
    this.ctx.fillRect(x + 175, y, 45, this.HEIGHT - y);

    // Left tower cone roof
    this.ctx.fillStyle = '#ff3366';
    this.ctx.beginPath();
    this.ctx.moveTo(x - 4, y);
    this.ctx.lineTo(x + 22, y - 50);
    this.ctx.lineTo(x + 49, y);
    this.ctx.fill();

    // Right tower cone roof
    this.ctx.beginPath();
    this.ctx.moveTo(x + 171, y);
    this.ctx.lineTo(x + 197, y - 50);
    this.ctx.lineTo(x + 224, y);
    this.ctx.fill();

    // Welcome Sign
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(x + 40, y + 80, 140, 38);
    this.ctx.fillStyle = '#ff3366';
    this.ctx.font = 'bold 15px Quicksand, sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('🏰 ĐÍCH ĐẾN 20/10', x + 110, y + 104);

    // Cute castle gate
    this.ctx.fillStyle = '#7a223e';
    this.ctx.beginPath();
    this.ctx.arc(x + 110, y + 230, 30, Math.PI, 0);
    this.ctx.lineTo(x + 140, this.HEIGHT);
    this.ctx.lineTo(x + 80, this.HEIGHT);
    this.ctx.fill();

    this.ctx.restore();
  }

  // ========================================================
  // VICTORY: SHOW SINGLE RANDOM LETTER FOR PEER FRIEND
  // ========================================================
  triggerVictory() {
    this.state = 'VICTORY';
    window.soundEngine.stopBgm();
    window.soundEngine.playVictory();

    this.victoryRecipientName.textContent = this.recipientName;
    this.letterRecipientTarget.textContent = this.recipientName;

    // Pick 1 random peer letter
    this.activeGrandLetterIdx = Math.floor(Math.random() * PEER_GRAND_LETTERS.length);
    this.renderGrandLetter();
    this.switchScreen('victory');
    this.launchVictoryConfetti();
  }

  launchVictoryConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 130,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff3366', '#ff758c', '#ffd166', '#ffffff']
      });
      setTimeout(() => {
        confetti({ particleCount: 80, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1 } });
      }, 350);
    }
  }

  renderGrandLetter() {
    const letter = PEER_GRAND_LETTERS[this.activeGrandLetterIdx];
    this.letterIndexBadge.textContent = 'BỨC TÂM THƯ DUYÊN PHẬN';
    this.letterTopic.textContent = letter.topic;
    this.letterBodyText.innerHTML = letter.body;
    this.letterPerkText.textContent = letter.perk;

    const envelope = document.getElementById('grandLetterEnvelope');
    if (envelope) {
      envelope.style.animation = 'none';
      envelope.offsetHeight;
      envelope.style.animation = 'cardFade 0.4s ease';
    }
  }
}

// Falling petals ambient
function initPetalsCanvas() {
  const layer = document.getElementById('petalsLayer');
  if (!layer) return;

  const count = 16;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'petal-particle';
    p.textContent = Math.random() < 0.6 ? '🌸' : '✨';
    p.style.left = `${Math.random() * 100}vw`;
    p.style.animationDuration = `${6 + Math.random() * 7}s`;
    p.style.animationDelay = `${Math.random() * 5}s`;
    p.style.fontSize = `${14 + Math.random() * 12}px`;
    layer.appendChild(p);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initPetalsCanvas();
  window.game = new Flappy2010Game();
});
