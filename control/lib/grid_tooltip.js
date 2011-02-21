MapTooltips = {};

MapTooltips.getToolTip = function(feature, context, index) {
  var tooltip = $(context).children('div.maputil-tooltip-' +
    index +
    ':not(.removed)');
  if (tooltip.size() === 0) {
    tooltip = $("<div class='maputil-tooltip maputil-tooltip-" +
      index +
      "'>" +
      "</div>").html(feature);
    $(context).append(tooltip);
  }

  // Hide any active tooltips for layers beneath this one.
  for (var i = (index - 1); i > 0; i--) {
    var fallback = $('div.maputil-tooltip-' + i + ':not(.removed)');
    if (fallback.size() > 0) {
      fallback.addClass('hidden').hide();
    }
  }

  return tooltip;
};

MapTooltips.click = function(feature, context, index) {
  var tooltip = MapTooltips.getToolTip(feature, context, index);
  var close = $('<a href="#close" class="close">Close</a>');
  close.click(function() {
    tooltip
      .addClass('removed')
      .fadeOut('fast', function() { $(this).remove(); });
    return false;
  });
  tooltip
    .addClass('popup')
    .html(feature)
    .append(close);
};

MapTooltips.select = function(feature, context, layer_id) {
  MapTooltips.getToolTip(feature, context, layer_id);
  $(context).css('cursor', 'pointer');
};

MapTooltips.unselect = function(feature, context, layer_id) {
  $(context)
    .css('cursor', 'default')
    .children('div.maputil-tooltip-' + layer_id + ':not(.popup)')
    .addClass('removed')
    .fadeOut('fast', function() { $(this).remove(); });

  // Iterate through any active tooltips on layers beneath this one and show
  // the highest one found.
  $(context)
    .children('div.maputil-tooltip:first')
    .removeClass('hidden')
    .show();
};

