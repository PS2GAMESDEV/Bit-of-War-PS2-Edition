export class Animation {
    constructor(paths, speed, loop, scale = 1) {
        this.frames = paths.map(path => new Image(path));
        this.speed = speed;
        this.loop = loop;
        this.flip = false;
        this.offset = { x: 72, y: 0 };

        this.totalFrames = this.frames.length;
        this.currentFrame = 0;
        
        this.frameWidth = this.frames[this.currentFrame].width * scale;
        this.frameHeight = this.frames[this.currentFrame].height * scale;
        
        this.lastUpdateTime = Date.now();
    }

    update(deltaTime) {
        const now = Date.now();
        const delta = (now - this.lastUpdateTime) / 1000;

        if (delta > this.speed) {
            if (this.loop) {
                this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
            } else {
                if (this.currentFrame < this.totalFrames - 1) {
                    this.currentFrame++;
                }
            }
            this.lastUpdateTime = now;
        }
    }

    draw(x, y) {
        const frame = this.frames[this.currentFrame];
        
        frame.width = this.flip ? -this.frameWidth: this.frameWidth;
        frame.height = this.frameHeight;

        frame.draw(this.flip ? x + this.offset.x: x, y);
    }

    reset() {
        this.currentFrame = 0;
        this.lastUpdateTime = Date.now();
    }
}
