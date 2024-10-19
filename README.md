# Clean city

[Play the game!](https://danadi87.github.io/clean-city-game/)

# Description

Embark on an exciting adventure across the city, bringing cleanliness to our location.
Perfect for young minds, this game combines fun with educational value, teaching responsibility and the importance of keeping our environments clean.
The player has to collect as many garbage items as possible in the time given, but to win, he also has to make sure to take them to the trash can before the time is up. The game ends when the time is up and a score is calculated based on the amount of garbage items collected and taken to the trash can.

# Main functionalities

- The player moves using the left, right, up and down arrowkeys
- The player must interact with the various garbage items to collect them
- During the game, he has to interact with the trash can at least once before the time is up so the collected items can be added as points to his score
- Everytime the player interacts with the trash can, the can will change position
- If interacting with the trash can without any items collected, the player loses a life
- In order to win, the player must have at least one life at the end of the game and minimum 50 items collected and thrown to the trash can (in the score points)
- A score is calculated based on the accumumlated collected items, each time the player interacts with the trash can
- High Scores are tracked locally with the top three highes scores obtained

# Technologies used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes
- Local Storage
- Audio and images

# States

- Start screen
- Instructions screen
- Game screen
- Game over screen

# Project structure

# game.js

- start();
- startCountdown();
- gameLoop();
- update();
- endGame();

# obstacles.js

- move();
- updatePosition();

# player.js

- move();
- updatePosition();
- didCollide(obstacle);
- didCollide(trashCan);

# instructions.js

- showInstructions();

# script.js

- startGame();
- readInstructions();

# Extra Links

# Presentation

[Link](https://docs.google.com/presentation/d/1Gf85Hp1pQtLtfLuAyWuTjrFv_Gqc4EIOw9QyNc6vP2A/edit#slide=id.p)

# Trello

[Link](https://trello.com/b/BhK1WPnc/clean-city-game)

# Deploy

[Link](https://danadi87.github.io/clean-city-game/)
