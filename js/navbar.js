function echoNav()
{
	document.getElementById("nav-container").innerHTML = '<nav class="navbar navbar-default">
		  <div class="container-fluid">
		    <!-- Brand and toggle get grouped for better mobile display -->
		    <div class="navbar-header">
		      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span class="sr-only">Toggle navigation</span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		      </button>
		      <a class="navbar-brand" href="#">CompactStorage</a>
		    </div>

		    <!-- Collect the nav links, forms, and other content for toggling -->
		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul class="nav navbar-nav">
		        <li class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>
		        <li><a href="#">Downloads</a></li>
		        <li class="dropdown">
		          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Wiki <span class="caret"></span></a>
		          <ul class="dropdown-menu">
		            <li><a href="#">Chest</a></li>
		            <li><a href="#">Backpack</a></li>
		            <li><a href="#">Crates <strong>WIP</strong></a></li>
		            <li role="separator" class="divider"></li>
		            <li><a href="#">Crafting</a></li>
		          </ul>
		        </li>
		      </ul>
		      <ul class="nav navbar-nav navbar-right">
		        <li><a href="http://github.com/tattyseal/CompactStorage/"><i class="fa fa-github"></i> Github</a></li>
		      </ul>
		    </div><!-- /.navbar-collapse -->
		  </div><!-- /.container-fluid -->
		</nav>';
}