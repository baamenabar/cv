// DocPad Configuration File
// http://docpad.org/docs/config

// Define the DocPad Configuration
var docpadConfig = {
	templateData:{
		site:{
			title: "El Plog de ImINaBAR",
			url: 'http://plog.iminabar.com'
		},
		getPreparedTitle: function(){
			//if @document.title then "#{@document.title} | #{@site.title}" else @site.title
			if(this.document.title){
				return this.document.title + ' | ' + this.site.title;
			}else{
				return this.site.title;
			}
		}
	},
	collections:{
		pages: function(){
			return this.getColection('html').findAlllLive({isPage:true});
		}
	},
	plugins:{
		autoprefix: true,
		compass: false
	}
};

// Export the DocPad Configuration
module.exports = docpadConfig;