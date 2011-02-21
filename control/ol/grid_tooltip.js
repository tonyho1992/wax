StyleWriterTooltips = {};

StyleWriterTooltips.click = function(feature) {
  var html = '';
  // TODO: without name + description, we aren't doing this yet.
  return;
};

StyleWriterTooltips.getToolTip = function(feature, context, index) {
  var tooltip = $('div.openlayers-tooltip-' +
    index +
    ':not(.removed)',
    $(context));
  if (tooltip.size() === 0) {
      tooltip = $("<div class='openlayers-tooltip openlayers-tooltip-" +
          index + 
          "'>" +
          "</div>").html(feature);
      $(context).append(tooltip);
  }

  // Hide any active tooltips for layers beneath this one.
  for (var i = (index - 1); i > 0; i--) {
    var fallback = $('div.openlayers-tooltip-' + i + ':not(.removed)');
    if (fallback.size() > 0) {
      fallback.addClass('hidden').hide();
    }
  }

  return tooltip;
};

StyleWriterTooltips.select = function(feature, div, layer_id, evt) {
  var tooltip = StyleWriterTooltips.getToolTip(feature, div, layer_id);
  $(div).css('cursor', 'pointer');
};

StyleWriterTooltips.unselect = function(feature, div, layer_id) {
  $(div).css('cursor', 'default');
  $(div).children('div.openlayers-tooltip-' + layer_id)
    .addClass('removed')
    .fadeOut('fast', function() { $(this).remove(); });

  // Iterate through any active tooltips on layers beneath this one and show
  // the highest one found.
  $('div.openlayers-tooltip:first').removeClass('hidden').show();
};
