import { sceneManager } from "src/core/scenemanager.js";
import { menu } from "src/ui/menu.js";

sceneManager.changeScene(menu);

while(true) {
    Screen.clear();
    
    sceneManager.update(pad);
    
    Screen.flip();
}
