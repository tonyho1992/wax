MapTooltips = {};

MapTooltips.click = function(feature) {
  var html = '';
  // TODO: without name + description, we aren't doing this yet.
  return;
};

MapTooltips.getToolTip = function(feature, context, index) {
  var tooltip = $('div.maputil-tooltip-' +
    index +
    ':not(.removed)',
    $(context));
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

MapTooltips.select = function(feature, div, layer_id) {
  var tooltip = MapTooltips.getToolTip(feature, div, layer_id);
  $(div).css('cursor', 'pointer');
};

MapTooltips.unselect = function(feature, div, layer_id) {
  $(div).css('cursor', 'default');
  $(div).children('div.maputil-tooltip-' + layer_id)
    .addClass('removed')
    .fadeOut('fast', function() { $(this).remove(); });

  // Iterate through any active tooltips on layers beneath this one and show
  // the highest one found.
  $('div.maputil-tooltip:first').removeClass('hidden').show();
};
