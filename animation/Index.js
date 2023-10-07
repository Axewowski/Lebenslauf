const canvas = document.querySelector('.border');
const ctx = canvas.getContext('2d');
const select = document.getElementById('animationSelect');
const ready = document.querySelector('.btn-yes');
const CANVASWEIGHT = 960;
const CANVASHEIGHT = 960;

const characters = [
  {
    bee: {
      frames: [
        'bee/sprites/skeleton-animation_00.png',
        'bee/sprites/skeleton-animation_01.png',
        'bee/sprites/skeleton-animation_02.png',
        'bee/sprites/skeleton-animation_03.png',
        'bee/sprites/skeleton-animation_04.png',
        'bee/sprites/skeleton-animation_05.png',
        'bee/sprites/skeleton-animation_06.png',
        'bee/sprites/skeleton-animation_08.png',
        'bee/sprites/skeleton-animation_09.png',
        'bee/sprites/skeleton-animation_10.png',
        'bee/sprites/skeleton-animation_11.png',
        'bee/sprites/skeleton-animation_12.png',
      ],
    },
  },
  {
    ghost: {
      frames: [
        'Ghost/sprites/skeleton-animation_00.png',
        'Ghost/sprites/skeleton-animation_01.png',
        'Ghost/sprites/skeleton-animation_02.png',
        'Ghost/sprites/skeleton-animation_03.png',
        'Ghost/sprites/skeleton-animation_04.png',
        'Ghost/sprites/skeleton-animation_05.png',
        'Ghost/sprites/skeleton-animation_06.png',
        'Ghost/sprites/skeleton-animation_07.png',
        'Ghost/sprites/skeleton-animation_08.png',
        'Ghost/sprites/skeleton-animation_09.png',
        'Ghost/sprites/skeleton-animation_10.png',
      ],
    },
  },
  {
    tody : {
        frames :
        [
            'Tody/00_idle/skeleton-00_idle_00.png',
            'Tody/00_idle/skeleton-00_idle_01.png',
            'Tody/00_idle/skeleton-00_idle_02.png',
            'Tody/00_idle/skeleton-00_idle_03.png',
            'Tody/00_idle/skeleton-00_idle_04.png',
            'Tody/00_idle/skeleton-00_idle_05.png',
            'Tody/00_idle/skeleton-00_idle_06.png',
            'Tody/00_idle/skeleton-00_idle_07.png',
            'Tody/00_idle/skeleton-00_idle_08.png',
            'Tody/00_idle/skeleton-00_idle_09.png',
            'Tody/00_idle/skeleton-00_idle_10.png',
            'Tody/00_idle/skeleton-00_idle_11.png',
            'Tody/00_idle/skeleton-00_idle_12.png',
            'Tody/00_idle/skeleton-00_idle_13.png',
            'Tody/00_idle/skeleton-00_idle_14.png',
            'Tody/00_idle/skeleton-00_idle_15.png',
            'Tody/00_idle/skeleton-00_idle_16.png',
            'Tody/00_idle/skeleton-00_idle_17.png',
            'Tody/00_idle/skeleton-00_idle_18.png',
            'Tody/00_idle/skeleton-00_idle_19.png',
            'Tody/00_idle/skeleton-00_idle_20.png'
        ],
    },

  },
];

let currentAnimationFrames = [];

const drawNextFrame = (currentFrame) => {
  const img = new Image();
  img.src = currentAnimationFrames[currentFrame];

  img.onload = () => {
    ctx.clearRect(0, 0, CANVASWEIGHT, CANVASHEIGHT);
    ctx.drawImage(img, 0, 0, CANVASWEIGHT, CANVASHEIGHT);
    currentFrame = (currentFrame + 1) % currentAnimationFrames.length;
    setTimeout(() => drawNextFrame(currentFrame), 40);
  };
};

const handleSelectChange = () => {
  const selectedValue = select.value;
  currentAnimationFrames = characters.find(
    (character) => character[selectedValue]
  )?.[selectedValue]?.frames;

  if (currentAnimationFrames) {
    let currentFrame = 0;
    drawNextFrame(currentFrame);
  }
};

select.addEventListener('change', handleSelectChange);

// Inicjalne wywołanie funkcji dla wartości początkowej
handleSelectChange();

ready.addEventListener('click', () => {
    console.log("Text");
});