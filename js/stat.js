window.renderStatistics = function (ctx, names, times) {
    var initialX = Cloud.X + Cloud.HORIZONTAL_GAP;
    var initialY = Cloud.Y + Cloud.VERTICAL_GAP;

    renderCloud(ctx, Cloud, Cloud.X + Cloud.SHADOW_OFFSET, Cloud.Y + Cloud.SHADOW_OFFSET, Cloud.SHADOW_COLOR);
    renderCloud(ctx, Cloud, Cloud.X, Cloud.Y, Cloud.COLOR);

    renderText(ctx, Text, initialX, initialY, 'Ура вы победили!');
    renderText(ctx, Text, initialX, initialY + Text.FONT_SIZE + Text.GAP, 'Список результатов:');

    renderHistogram(ctx, Cloud, Bar, names, times);
  };
})();
