export class SceneManager {
    constructor() {
        this.currentScene = null;
    }

    changeScene(scene) {
        if (this.currentScene && this.currentScene.unload) {
            this.currentScene.unload();
        }
        this.currentScene = scene;
        if (this.currentScene && this.currentScene.init) {
            this.currentScene.init();
        }
    }

    update(pad) {
        if (this.currentScene) {
            this.currentScene.update(pad);
        }
    }
}

export const sceneManager = new SceneManager();
