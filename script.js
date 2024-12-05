// Manipulação das escolhas do jogador
function chooseOption(choice) {
  const storyText = document.getElementById("story-text");
  const storyImage = document.getElementById("story-image");

  if (choice === "casa") {
    storyText.textContent =
      "Você decidiu ficar em casa estudando psicologia. Um caminho solitário, mas de grande aprendizado!";
    storyImage.src = "imagens/casa-estudando.png"; // file-B5ayBECAXx2dUzLNREWBXJ.webp
  } else if (choice === "faculdade") {
    storyText.textContent =
      "Você foi para a faculdade de psicologia e conheceu pessoas incríveis que compartilham sua paixão!";
    storyImage.src = "imagens/faculdade-campus.png"; // file-YNu3dNEFGQCjwxqEbVkX5q.webp
  }
}
