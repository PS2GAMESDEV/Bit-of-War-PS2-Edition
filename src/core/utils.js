export const font = new Font("data/font/joystix.ttf");

export const pad = Pads.get(0);

export const scale = 2;

export function loadImage(path, scale) {
    const img = new Image(path);
    img.width *= scale;
    img.height *= scale;
    return img;
};

export function overlap(player, door) {
    return (
        player.x < door.x + door.w &&
        player.x + player.width > door.x &&
        player.y < door.y + door.h &&
        player.y + player.height > door.y
    );
}
