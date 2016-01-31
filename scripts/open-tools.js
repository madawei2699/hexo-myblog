var exec = require('child_process').exec;

// Hexo 3
hexo.on('new', function(data){
    exec('open -a "/Applications/Mou.app" ' + data.path);
});
