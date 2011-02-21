MapTooltips = {};

// Get the active tooltip for a layer or create a new one if no tooltip exists.
// Hide any tooltips on layers underneath this one.
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
    for (var i = (index - 1); i > 0; i--) {
        var fallback = $('div.maputil-tooltip-' + i + ':not(.removed)');
        if (fallback.size() > 0) {
            fallback.addClass('hidden').hide();
        }
    }
    return tooltip;
};

// Expand a tooltip to be a "popup". Suspends all other tooltips from being
// shown until this popup is closed or another popup is opened.
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

// Show a tooltip.
MapTooltips.select = function(feature, context, layer_id) {
    MapTooltips.getToolTip(feature, context, layer_id);
    $(context).css('cursor', 'pointer');
};

// Hide all tooltips on this layer and show the first hidden tooltip on the
// highest layer underneath if found.
MapTooltips.unselect = function(feature, context, layer_id) {
    $(context)
        .css('cursor', 'default')
        .children('div.maputil-tooltip-' + layer_id + ':not(.popup)')
        .addClass('removed')
        .fadeOut('fast', function() { $(this).remove(); });
    $(context)
        .children('div.maputil-tooltip:first')
        .removeClass('hidden')
        .show();
};

