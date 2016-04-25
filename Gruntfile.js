module.exports = function(grunt) {
    
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    // includePaths: require('node-bourbon').with('other/path', 'another/path') 
                    // - or - 
                    includePaths: require('node-bourbon').includePaths.concat(require('node-neat').includePaths)
                },
                files: {
                    './public/stylesheets/style.css': './public/stylesheets/style.scss',
                    './public/stylesheets/style_desktop.css': './public/stylesheets/style_desktop.scss',
                    './public/stylesheets/style_mobile.css': './public/stylesheets/style_mobile.scss'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);
    
};
