window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 960;
  canvas.height = 916;
  ctx.drawImageStyle = 'black';
  ctx.linewidth = 3;

  let isRightKeyPressed = false;
  let isLeftKeyPressed = false;
  let isDownKeyPressed = false;
  let isUpKeyPressed = false;
  let isShiftKeyPressed = false;
  let isSpaceKeyPressed = false;



  class Rockstar {
      constructor(width, height)
      {
  
         
        this.x = Math.floor(Math.random() * 1000) + 1;
        this.y = Math.floor(Math.random() * 1000) + 1;
  
      }

    
      draw(context)
      {
  
        context.beginPath();        
        context.arc(this.x, this.y, 20, 0, Math.PI * 2)
        context.stroke();
  
      }
  }  

  class HUD {
    constructor(width,height)
    {
      this.width = width;
      this.height = height;
      this.max = 10;
      this.ammo = 20;
    }

    HP(context)
    {
      const barWidth = 5;
      const barHeight = 50;
      const color = 'red';
      const gapp = 5;

      context.fillStyle = color;

      for (let i=0; i<this.max; i++)
      {
        const x = 1 + i * (barWidth + gapp);
        const y = 2;      
        context.fillRect(x,y,barWidth,barHeight);
    
      }
  
    }

    Ammo (context) {
      const barWidth = 8;
      const barHeight = 20;
      const color = 'green';
      const gap = 5;

      context.fillStyle = color;

      for (let i=0; i<this.ammo; i++)
      {
        
        const x = 1 + i * (barWidth + gap);
        const y = 70;      
        context.fillRect(x,y,barWidth,barHeight);
    
      }

    }
  }


  class Bullet {
    constructor(x,y)
    {
      this.x = x;
      this.y = y;
      this.speedY = -5;
      this.width = 2;
      this.height = 10;
    }


    update() {
      this.y += this.speedY;
    }

    draw(context) {
      context.fillStyle = 'white';
      context.fillRect(this.x, this.y, this.width, this.height);
    }

  }

  class Player {
    constructor(game)
    {
      this.game = game;
      this.health = 100;
      this.Bullets = [];
    }

    attack(isSpaceKeyPressed) {
      if (isSpaceKeyPressed) {
      
        
        const bulletX = this.game.rocket.positionx + this.game.rocket.width / 2;
        const bulletY = this.game.rocket.positiony;

        const bullet = new Bullet(bulletX, bulletY);
        this.Bullets.push(bullet);
        this.game.bullets.push(bullet);
        
      }
    }
  }

  class Rocket {
    constructor(width,height,game)
    {
        this.game = game;
        this.width = width;
        this.height = height;
        this.rocketimage = new Image();
        this.rocketimage.src = 'rocket.png';
        this.positionx = 460;
        this.positiony = 800;
        this.velocity = 1;
      }

    position(context)
    {
      context.drawImage(this.rocketimage, this.positionx, this.positiony, 50, 50);
    }
  }


  class Asteroid {
      constructor(game, width, height)
          {
            this.game = game;
            this.width = width;
            this.height = height;
            this.x = Math.floor(Math.random() * 1000) + 1;
            this.y = Math.floor(Math.random() * 1000) + 1;
            this.speedX = 1;
            this.image = document.getElementById('asteroid');
            this.spriteWidth = 150;
            this.spriteHeight = 150;
            this.radius = 100;
          }

          print(context)
          {
            context.drawImage(this.image, this.x, this.y, 50, 50);
           
            
          }
        }

      
    

  class Game {
    constructor(width, height )
    {
      this.rockstar = new Rockstar(50, 50);
      this.asteroid = new Asteroid(this, 50, 50);
      this.rocket = new Rocket(width, height, this);
      this.player = new Player(this);
      this.width = width;
      this.height = height;      
      this.RockstarsPools = [];
      this.max = 100;
      this.RockstarPoolsFunction();
      this.AsteroidPools = [];
      this.AsteroidPoolsFunction();
      this.shiftSpeed = 1;
      this.Bullets = [];
    }

    RockstarPoolsFunction()
    {
      for (let i=0; i<this.max; i++)
      {
        this.RockstarsPools.push(new Rockstar(this));
      }
    }

    AsteroidPoolsFunction()
    {
      for (let i = 0; i<this.max; i++)
      {
        this.AsteroidPools.push(new Asteroid(this));
      }
    }

      render(context)
      {
        this.RockstarsPools.forEach(rockstar => {
        
          rockstar.draw(context);
        
        })

        this.AsteroidPools.forEach(asteroid => {
          asteroid.print(context);
          
        })

        this.rocket.position(context);
      
        const hud = new HUD();
        hud.HP(context);
        hud.Ammo(context);
      }

  }

  
  window.addEventListener('keydown', (event) => {
    if (event.code === "ArrowRight") {
      game.rocket.positionx++;
      isRightKeyPressed = true;
    } else if (event.code === "ArrowLeft") {
      game.rocket.positionx--;
      isLeftKeyPressed = true;
    } else if (event.code === 'ArrowDown') {
      game.rocket.positiony++;
      isDownKeyPressed = true;
    } else if (event.code === 'ArrowUp') {
      game.rocket.positiony--;
      isUpKeyPressed = true;
    } else if (event.code === 'ShiftLeft') {
      game.rocket.velocity = 5;
      isShiftKeyPressed = true;
    } else if (event.code === ' ') {
      isSpaceKeyPressed = true;
    }
  
  });

  window.addEventListener('keyup', (event) => {
    if (event.code === "ArrowRight") {
      isRightKeyPressed = false;
    } else if (event.code === "ArrowLeft") {
      isLeftKeyPressed = false;
    } else if (event.code === 'ArrowDown') {
      isDownKeyPressed = false;
    } else if (event.code === 'ArrowUp') {
      isUpKeyPressed = false;
    } else if (event.code === 'ShiftLeft') {
      game.rocket.velocity = 1;
      isShiftKeyPressed = false;
    } else if (event.code === ' ') {
      isSpaceKeyPressed = false;
    }
  });

  const game = new Game(canvas.width, canvas.height);
  
  function animate() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    game.player.attack(isSpaceKeyPressed);

    game.player.Bullets.forEach((bullet) => {
      bullet.update();
      bullet.draw(ctx);
    
      if (bullet.y < 0) {
        const index = game.player.Bullets.indexOf(bullet);
        if (index > -1) {
          game.player.Bullets.splice(index, 1);
        }
      }

    });

    if (isRightKeyPressed) {
      game.rocket.positionx += game.rocket.velocity;
    }
    if (isLeftKeyPressed) {
      game.rocket.positionx -= game.rocket.velocity;
    }
    if (isDownKeyPressed) {
      game.rocket.positiony += game.rocket.velocity;
    }
    if (isUpKeyPressed) {
      game.rocket.positiony -= game.rocket.velocity;
    }

    
    if (isShiftKeyPressed) {
      game.rocket.velocity = 5;
    } else {
      game.rocket.velocity = 1;
    }
    

    game.AsteroidPools.forEach((asteroid => {
      asteroid.x += asteroid.speedX;
      asteroid.y += asteroid.speedX;

    if (asteroid.x <0 || asteroid.x > canvas.width - 50) {
      asteroid.speedX = -asteroid.speedX;
    }

    if (asteroid.y <0 || asteroid.y > canvas.width - 50) {
      asteroid.speedX = -asteroid.speedX;
    }

    asteroid.print(ctx);
    }));

    game.render(ctx);
      
   
    requestAnimationFrame(animate);
  }
  
  animate();
});