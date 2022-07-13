class JDash {
    constructor(cssTag) {
        this.selected = document.querySelectorAll(cssTag);
        this.textContents = [];
        
        for (let i = 0; i < this.selected.length; i++) {
            this.textContents.push(this.selected[i].textContent);
        }
    }
    
    text(newText) {
        if (newText === undefined) {
            return this.textContents;
        } else {
            for (let i = 0; i < this.textContents.length; i++) {
                this.textContents[i] = newText;
            }
            
            return this;
        }
    }
}

function jDash (cssTag) {
	return new JDash(cssTag);
}

function | (cssTag) {
	return new JDash(cssTag);
}
