// Application bootstrap.
$.domReady(function() {
    // Convert any markdown sections to HTML.
    var nav = $('.navigation ul');
    $('.md').each(function() {
        var html = document.createElement('div');
        html.innerHTML = (new Showdown.converter()).makeHtml(this.innerHTML);
        html.className = this.className;
        html.id = this.id;
        // TODO: free from shackles of jQuery
        $(this).hide().after(html);
        $('h1, h2, h3, h4, h5, h6', html).each(function() {
            this.id = this.innerText.replace(/[\s\W]+/g, '-').toLowerCase();

            var para = document.createElement('a'),
                sectionLi = document.createElement('li'),
                sectionA = document.createElement('a');

            para.innerHTML = '&para;'
            para.className = 'para'
            para.href = '#' + this.id;
            sectionA.href = '#' + this.id;
            sectionA.innerText = this.innerText;
            sectionLi.className = this.nodeName;
            sectionLi.appendChild(sectionA);
            nav.append(sectionLi);

            this.appendChild(para);
        });
    });
    $('.run').each(function() {
        eval(this.innerText);
    });
    sh_highlightDocument();
});
