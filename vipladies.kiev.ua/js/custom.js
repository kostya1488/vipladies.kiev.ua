(function($){
    
    $(document).ready(function(){
        
        $(document).on('click', '.header__sel-lang li', function(){
            document.location = $(this).data('url');
        });


        (function(){
            var previewNode = document.querySelector(".input--file__preview");
            var previewTemplate = document.querySelector("#previewTemplate").innerHTML;

            Dropzone.prototype.requeueFiles = function(files){
                for (var i = 0, l = files.length, file; i < l; i++){
                    file = files[i];
                    file.status = Dropzone.QUEUED;
                    file.upload.progress = 0;
                    file.upload.bytesSent = 0;
                }
            }

            var zdrop = new Dropzone("#my-awesome-dropzone", {
                url: '/wp-admin/admin-ajax.php',
                maxFilesize: 5,
                thumbnailWidth:"250",
                thumbnailHeight:"250",
                previewTemplate: previewTemplate,
                previewsContainer: "#previews",
                clickable: "#zdrop",

                maxFiles: 5,
                parallelUploads: 10,
                uploadMultiple: true,
                autoProcessQueue: false,

                

                maxfilesexceeded: function(file) {
                    this.removeFile(file);
                },

                completemultiple: function(files){
                    var self = this;
                    self.requeueFiles(self.files); 
                    $('.spinner').removeClass('opened');
                },
                sending: function(){
                    $('.spinner').addClass('opened');
                    $('.error-message').remove();
                    $('.error').removeClass('error')
                },
                accept: function(file, done) {
                    done();
                },
                error: function(file, msg){
                  if(msg.success){
                  	
                  }else{
                  	alert(msg);
                    this.removeFile(file); 
                  }
                    
                },
                success: function(file, res){

                    if(!res.sucess && res.data && res.data.errors ){


                        for( field in res.data.errors){

                            if(res.data.errors.hasOwnProperty(field)){

                                $('#my-awesome-dropzone')
                                    .find('[name="'+field+'"]')
                                    .addClass('error');
                                    //.after('<p class="error-message">'+ res.data.errors[field][0] +'</p>');
                            }

                        }


                    }else{
                        $('.b-close').click();
                        $('.popup-thnx').bPopup();
                    }
                },
                init: function() {
                    var self = this;
                    $("#my-awesome-dropzone").submit(function(e) {
                        e.preventDefault();
                      
                      	    if(zdrop.files.length < 1) {
                             
                              $('#zdrop').addClass('error').after('<p class="error-message" >'+ $('#my-awesome-dropzone').data('imgMessage') +'</p>');
                        
                            }
                                              
                        self.processQueue();
                    });

                }

            });



        }());
        
    })
    
})(jQuery);