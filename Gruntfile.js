
module.exports = function (grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['css/style.css']
            }
        },


     cssmin:{
        dist:{
            files:[
                {
                 //Mandamos a crear el min.css a partir del .css
                 'src':'style.css',
                 'dest':'css/style.min.css'
                }
            ]
        }
    },
       
        imagemin: {
            options: {
                cache: false
            },

            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img'
                }]
            }
        },


         less: {
          development: {
            options: {
              paths: ['css']
            },
            files: {'css/style.css':'css/style.less'
            }
          }
        }
    });
   

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-less');
	
    // Default task. //
	grunt.registerTask('validar', ['htmlhint','jshint','less']);
	grunt.registerTask('css', ['csslint']);
    grunt.registerTask('min', ['cssmin']);
	
};
