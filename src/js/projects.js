const projects = [
	{
		id:'collective-health',
		company: {
			logo: '/assets/images/ch-logo.svg',
			headerBG: "url('/assets/images/ch-header-bg.png')",
			name: 'Collective Health'
		},
		project: {
			description: 'Collective Health gives companies a smarter way to provide healthcare coverage through technology. Powered by a platform that connects and administers the entire benefits ecosystem — health plan, benefits programs, spending accounts, employee support — their solution delivers an effortless experience for everyone.',
			tech: ['Backbone.js/Underscore', 'GSAP', 'PHP/ACF', 'jQuery', 'CSS3(Sass)', 'Wordpress API', 'Grunt', 'SVG'],
			url: '//www.collectivehealth.com'
		},
		screenshots: {
			small: {
				desktop: '/assets/images/ch-desktop.png',
				tablet: '/assets/images/ch-tablet.png',
				mobile: '/assets/images/ch-mobile.png'
			},
			large: {
				desktop: '/assets/images/ch-desktop-2.png',
				tablet: '/assets/images/ch-tablet-2.png',
				mobile: '/assets/images/ch-mobile-2.png'
			}
		},
		isSVG: true
	},
	{
		id:'nutanix',
		company: {
			logo: '/assets/images/nutanix-logo.svg',
			headerBG: "url('/assets/images/nutanix-header-bg.jpg')",
			name: 'Nutanix'
		},
		project: {
			description: 'Nutanix makes infrastructure invisible, elevating IT to focus on the applications and services that power their business. The Nutanix enterprise cloud platform leverages web-scale engineering and consumer-grade design to natively converge compute, virtualization and storage into a resilient, software-defined solution with rich machine intelligence.',
			tech: ['ES6', 'Mustache.js', 'Pattern Lab 3', 'HTML5', 'CSS3/Sass', 'Wordpress API', 'GitFlow', 'Gulp', 'npm', 'PHP/ACF'],
			url: '//nutanix.com/'
		},
		screenshots: {
			small: {
				desktop: '/assets/images/nutanix-desktop.png',
				tablet: '/assets/images/nutanix-tablet.png',
				mobile: '/assets/images/nutanix-mobile.png'
			},
			large: {
				desktop: '/assets/images/nutanix-desktop-2.png',
				tablet: '/assets/images/nutanix-tablet-2.png',
				mobile: '/assets/images/nutanix-mobile-2.png'
			}
		},
		isSVG: true
	},
	{
		id:'totango',
		company: {
			logo: '/assets/images/totango-logo.png',
			headerBG: "url('/assets/images/totango-header-bg.png')",
			name: 'Totango'
		},
		project: {
			description: 'Totango is a customer success platform that helps recurring revenue businesses simplify the complexities of customer success by connecting the dots of customer data, actively monitoring customer health changes, and driving proactive engagements.',
			tech: ['PHP/ACF', 'jQuery', 'CSS3(Sass)', 'Wordpress API', 'Grunt', 'Marketo', 'Salesforce API', 'Git'],
			url: '//www.totango.com/'
		},
		screenshots: {
			small: {
				desktop: '/assets/images/totango-desktop.png',
				tablet: '/assets/images/totango-tablet.png',
				mobile: '/assets/images/totango-mobile.png'
			},
			large: {
				desktop: '/assets/images/totango-desktop-2.png',
				tablet: '/assets/images/totango-tablet-2.png',
				mobile: '/assets/images/totango-mobile-2.png'
			}
		},
		isSVG: false
	},
	{
		id:'nuvasive',
		company: {
			logo: '/assets/images/nuvasive-logo.svg',
			headerBG: "url('/assets/images/nuvasive-header-bg.jpg')",
			name: 'NuVasive'
		},
		project: {
			description: 'NuVasive is the leader in spine technology innovation, focused on transforming spine surgery with minimally disruptive, procedurally-integrated solutions.',
			tech: ['ES6', 'Mustache.js', 'Pattern Lab 3', 'HTML5', 'CSS3/Sass', 'Wordpress API', 'GitFlow', 'Gulp', 'npm', 'PHP/ACF'],
			url: '//nuvasive.com/'
		},
		screenshots: {
			small: {
				desktop: '/assets/images/nuvasive-desktop.png',
				tablet: '/assets/images/nuvasive-tablet.png',
				mobile: '/assets/images/nuvasive-mobile.png'
			},
			large: {
				desktop: '/assets/images/nuvasive-desktop-2.png',
				tablet: '/assets/images/nuvasive-tablet-2.png',
				mobile: '/assets/images/nuvasive-mobile-2.png'
			}
		},
		isSVG: true
	},
	{
		id:'esurance',
		company: {
			logo: '/assets/images/ch-logo.svg',
			headerBG: "url('/assets/images/ch-header-bg.png')",
			name: 'Collective Health'
		},
		project: {
			description: 'Collective Health gives companies a smarter way to provide healthcare coverage through technology. Powered by a platform that connects and administers the entire benefits ecosystem — health plan, benefits programs, spending accounts, employee support — their solution delivers an effortless experience for everyone.',
			tech: ['Backbone.js/Underscore', 'GSAP', 'PHP/ACF', 'jQuery', 'CSS3(Sass)', 'Wordpress API', 'Grunt'],
			url: 'http://www.collectivehealth.com'
		},
		screenshots: {
			small: {
				desktop: '/assets/images/ch-desktop.png',
				tablet: '/assets/images/ch-tablet.png',
				mobile: '/assets/images/ch-mobile.png'
			},
			large: {
				desktop: '/assets/images/ch-desktop-2.png',
				tablet: '/assets/images/ch-tablet-2.png',
				mobile: '/assets/images/ch-mobile-2.png'
			}
		}
	},
	{
		id:'big-dog-hq',
		company: {
			logo: '/assets/images/nutanix-logo.svg',
			headerBG: "url('/assets/images/nutanix-header-bg.jpg')",
			name: 'Nutanix'
		},
		project: {
			description: 'Nutanix makes infrastructure invisible, elevating IT to focus on the applications and services that power their business. The Nutanix enterprise cloud platform leverages web-scale engineering and consumer-grade design to natively converge compute, virtualization and storage into a resilient, software-defined solution with rich machine intelligence.',
			tech: ['ES6', 'Mustache.js', 'Pattern Lab 3', 'HTML5', 'CSS3/Sass', 'Wordpress API', 'GitFlow', 'Gulp', 'npm', 'PHP/ACF'],
			url: ''
		},
		screenshots: {
			small: {
				desktop: '/assets/images/nutanix-desktop.png',
				tablet: '/assets/images/nutanix-tablet.png',
				mobile: '/assets/images/nutanix-mobile.png'
			},
			large: {
				desktop: '/assets/images/nutanix-desktop-2.png',
				tablet: '/assets/images/nutanix-tablet-2.png',
				mobile: '/assets/images/nutanix-mobile-2.png'
			}
		}
	}
];


export default projects;