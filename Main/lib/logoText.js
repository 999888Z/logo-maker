class LogoText {
    constructor(letters, textColor, shape) {
      this.letters = letters;
      this.textColor = textColor;
      this.shape = shape
    }
  
    render() {
        if (this.shape === "Circle"){
            return `<text x="25" y="60" font-size="30" font-family="Arial" fill="${this.textColor}">${this.letters}</text> </svg>`;
        } else if(this.shape === "Triangle"){
            return `<text x="114" y="130" font-size="40" font-family="Arial" fill="${this.textColor}">${this.letters}</text> </svg>`;
        }else if(this.shape === "Square"){
            return `<text x="40" y="95" font-size="40" font-family="Arial" fill="${this.textColor}">${this.letters}</text> </svg>`;
        }
      
    }

  }
  
  module.exports = LogoText;