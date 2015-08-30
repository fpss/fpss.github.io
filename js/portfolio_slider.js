$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[
			{
			'title' : 'Building relationships',
			'description'   : 'Maintaining good relationships between teachers and students is an all around winning proposition as it fosters an environment where real learning can take place.',
			'thumbnail' : ['img/portfolio/small/2.jpg', 'img/portfolio/small/3.jpg', 'img/portfolio/small/4.jpg'],
			'large' : ['img/portfolio/large/2.jpg', 'img/portfolio/large/3.jpg', 'img/portfolio/large/4.jpg'],
			'button_list'   :
			[

			],
			'tags'  : ['All']
			},

			{
			'title' : 'Seminars',
			'description'   : 'Seminars to let students see the best, ask question and get answers build better understanding on a given subject. ',
			'thumbnail' : ['img/portfolio/small/1.jpg', 'img/portfolio/small/3.jpg', 'img/portfolio/small/4.jpg'],
			'large' : ['img/portfolio/large/1.jpg', 'img/portfolio/large/3.jpg', 'img/portfolio/large/4.jpg'],
			'button_list'   :
			[

			],
			'tags'  : ['All']
			},

			{
			'title' : 'Discussion and Meeting',
			'description'   : 'Discussing new idea and methods to improve oneself and subject knowledge',
			'thumbnail' : ['img/portfolio/small/1.jpg','img/portfolio/small/2.jpg', 'img/portfolio/small/4.jpg'],
			'large' : ['img/portfolio/large/1.jpg','img/portfolio/large/2.jpg', 'img/portfolio/large/4.jpg'],
			'button_list'   :
			[

			],
			'tags'  : ['All']
			},

			{
			'title' : 'Networking and Connecting',
			'description'   : 'To build relationship with business leader to become prepare for future opportunities',
			'thumbnail' : ['img/portfolio/small/2.jpg', 'img/portfolio/small/3.jpg', 'img/portfolio/small/1.jpg'],
			'large' : ['img/portfolio/large/2.jpg', 'img/portfolio/large/3.jpg', 'img/portfolio/large/1.jpg'],
			'button_list'   :
			[
			],
			'tags'  : ['All']
			}
	 
		]
	});
});