$(document).ready(function () {

	$('.element-card').on('click', function () {

		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
		} else {
			$('.element-card').removeClass('open');
			$(this).addClass('open');
		}
	});
});
var options = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
};
var demo = new CountUp('myTargetElement', 0, <%= data.carbon %>, 3, 2.5, options);
if (!demo.error) {
  demo.start();
} else {
  console.error(demo.error);
}

var demo2 = new CountUp('myTargetElement2', 0, <%= data.trees %>, 3, 2.5, options);
if (!demo2.error) {
  demo2.start();
} else {
  console.error(demo2.error);
}

var demo3 = new CountUp('myTargetElement3', 0, <%= data.water %>, 3, 2.5, options);
if (!demo3.error) {
  demo3.start();
} else {
  console.error(demo3.error);
}
