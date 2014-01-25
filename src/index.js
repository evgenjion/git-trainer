/*borschik:include:repo.js*/
/*borschik:include:graph.js*/
/*borschik:include:command-line.js*/
/*borschik:include:git-commander.js*/

/* global Graph, Repo, CommandLine, GitCommander */

var myRepo = new Repo(),
    myGraph = new Graph('.demo', window.innerWidth, window.innerHeight-100),
    myCommander = new GitCommander(myRepo),

commandLine = new CommandLine('.command-line', function() {
    myCommander.run(commandLine.getCurrent());
    myGraph.dataUpdate(myRepo.getData());
});

document.querySelectorAll('.demo')[0].addEventListener('dblclick', function(e) {
    if (e.srcElement && e.srcElement.tagName === 'circle') {
        commandLine.append(e.srcElement.parentNode.dataset.oid);
    }
});