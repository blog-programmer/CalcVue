new Vue({
	el: "#app",
	data: {
		result: 0,
		
	},
	methods: {
		input(value) {
			if (this.result !=0 ) {
				this.result = this.result + '' + '' +value;
			}else {
				this.result = value;
			}

		},
		arif(value){
			for (var i = 0; i < this.result.length; i++) {//|| (this.result[i] == '+' && value == '+') 
			}
			if (Number(this.result[this.result.length -1]) || Number(this.result) || this.result[this.result.length -1] == '%' || this.result[this.result.length -1] == 0) {
				this.result = this.result + '' + '' +value;
			}else{
			} 
		},
		clean(value){
			if (value == 0) {
				this.result = 0;
			}
			if (value == '<') {
				this.result = String(this.result).replace(/.$/, '');
			}
		},
		output(){
			if (Number(this.result[this.result.length -1]) || this.result[this.result.length -1] == 0 || this.result[this.result.length -1] == '%' ) {
				this.result = eval(this.result) 
			}else{
			    alert ('Ошибка');
			}
		}

	}

})