import type CookieConsent from "vanilla-cookieconsent";
import type { CookieConsentConfig } from "vanilla-cookieconsent";

declare global {
	interface Window {
		dataLayer: any[];
		gtag: (...args: any[]) => void;
	}
}

function updatePreferences(cookie: CookieConsent.CookieValue) {
	const preferences = {
		ad_storage: "denied",
		ad_user_data: "denied",
		ad_personalization: "denied",
		analytics_storage: "denied",
		functionality_storage: "denied",
		personalization_storage: "denied",
	};
	cookie.categories.forEach((category) => {
		if (category === "analytics") {
			preferences.analytics_storage = "granted";
		}
		if (category === "advertising") {
			preferences.ad_storage = "granted";
			preferences.ad_user_data = "granted";
			preferences.ad_personalization = "granted";
		}
	});

	if (preferences) {
		window.dataLayer = window.dataLayer || [];

		function gtag(...args: any[]) {
			window.dataLayer.push(args);
		}

		gtag("consent", "update", preferences);

		if (preferences.analytics_storage === "granted") {
			loadGoogleAnalytics(cookie);
		}

		setTimeout(() => {
			window.location.reload();
		}, 1000);
	}
}

function loadGoogleAnalytics(cookie: CookieConsent.CookieValue) {
	cookie.categories.forEach((category) => {
		if (category === "analytics") {
			const script = document.createElement("script");
			script.async = true;
			script.src = "https://www.googletagmanager.com/gtag/js?id=TAG";
			document.head.appendChild(script);

			script.onload = () => {
				const trackingCode = document.createElement("script");
				trackingCode.innerHTML = `
					window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'TAG');
				`;
				document.head.appendChild(trackingCode);
			};
		}
	});
}

export const config: CookieConsentConfig = {
	guiOptions: {
		consentModal: {
			layout: "box inline",
			position: "bottom right",
		},
		preferencesModal: {
			layout: "box",
			position: "right",
			equalWeightButtons: true,
			flipButtons: false,
		},
	},
	onConsent: ({ cookie }) => loadGoogleAnalytics(cookie),
	onChange: ({ cookie }) => updatePreferences(cookie),
	categories: {
		necessary: {
			enabled: true,
			readOnly: true,
		},
		analytics: {
			autoClear: {
				cookies: [
					{
						name: /^_ga/,
					},
					{
						name: "_gid",
					},
				],
			},
			services: {
				ga: {
					label: "Google Analytics",
					cookies: [
						{
							name: /^(_ga|_gid)/,
						},
					],
				},
			},
		},
		targeting: {},
	},

	language: {
		default: "en",
		translations: {
			en: {
				consentModal: {
					title: "We use cookies",
					description:
						"We use cookies, including third party cookies, for operational purposes, statistical analyses, to personalize your experience, provide you with targeted content tailored to your interests and to analyze the performance of our advertising campaigns.",
					acceptAllBtn: "Accept all",
					acceptNecessaryBtn: "Reject all",
					showPreferencesBtn: "Manage Individual preferences",
				},
				preferencesModal: {
					title: "Manage cookie preferences",
					acceptAllBtn: "Accept all",
					acceptNecessaryBtn: "Reject all",
					savePreferencesBtn: "Accept current selection",
					closeIconLabel: "Close modal",
					sections: [
						{
							title: "Cookie usage",
							description:
								"We use cookies to ensure the basic functionalities of the website and to enhance your online experience ...",
						},
						{
							title: "Strictly necessary cookies",
							description:
								"These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
							linkedCategory: "necessary",
							cookieTable: {
								headers: {
									name: "Name",
									domain: "Service",
									description: "Description",
									expiration: "Expiration",
								},
								body: [
									{
										name: "cc_cookie",
										domain: "Airhire",
										description: "Cookie set to remember your cookie preferences",
										expiration: "Expires after 182 days",
									},
								],
							},
						},
						{
							title: "Performance and Analytics cookies",
							description:
								"These cookies allow the website to report to us on how the website is used and improve the user experience.",
							linkedCategory: "analytics",
							cookieTable: {
								headers: {
									name: "Name",
									domain: "Service",
									description: "Description",
									expiration: "Expiration",
								},
								body: [
									{
										name: "_ga",
										domain: "Google Analytics",
										description: 'Cookie set by <a href="#das">Google Analytics</a>',
										expiration: "Expires after 12 days",
									},
									{
										name: "_gid",
										domain: "Google Analytics",
										description: 'Cookie set by <a href="#das">Google Analytics</a>',
										expiration: "Session",
									},
								],
							},
						},
						{
							title: "More information",
							description:
								'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>',
						},
					],
				},
			},
		},
	},
};
