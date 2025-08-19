export class Collision {
    static check(player, hitboxes) {
        player.onGround = false;
        
        for (let hitbox of hitboxes) {
            if (this.isColliding(player, hitbox)) {
                this.resolveCollision(player, hitbox);
            }
        }
    }

    static isColliding(player, hitbox) {
        return (
            player.x < hitbox.x + hitbox.w &&
            player.x + player.width > hitbox.x &&
            player.y < hitbox.y + hitbox.h &&
            player.y + player.height > hitbox.y
        );
    }

    static resolveCollision(player, hitbox) {
        const pvX = player.prevPosition.x;
        const pvY = player.prevPosition.y;

        if (pvX + player.width <= hitbox.x) {
            player.x = hitbox.x - player.width;
            player.velocity.x = 0;
        } else if (pvX >= hitbox.x + hitbox.w) {
            player.x = hitbox.x + hitbox.w;
            player.velocity.x = 0;
        }

        if (player.x + player.width > hitbox.x && player.x < hitbox.x + hitbox.w) {
            if (pvY + player.height <= hitbox.y) {
                player.y = hitbox.y - player.height;
                player.velocity.y = 0;
                player.onGround = true;
            } else if (pvY >= hitbox.y + hitbox.h) {
                player.y = hitbox.y + hitbox.h;
                player.velocity.y = 0;
            }
        }
    }
}
