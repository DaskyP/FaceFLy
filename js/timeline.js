$(document).ready(function() {
    $(".like-btn").click(function() {
      let liked = $(this).attr("data-liked") === "true";
      let likesCount = $(this).siblings(".likes-count");
      let currentLikes = parseInt(likesCount.text());

      if (liked) {
        $(this).attr("data-liked", "false");
        $(this).attr("src", "svg/like.svg");
        likesCount.text(currentLikes - 1);
      } else {
        $(this).attr("data-liked", "true");
        $(this).attr("src", "svg/like2.svg");
        likesCount.text(currentLikes + 1);
      }
    });
  });