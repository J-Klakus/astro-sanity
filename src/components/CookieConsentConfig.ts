import type { CookieConsentConfig } from "vanilla-cookieconsent";

declare global {
	interface Window {
		dataLayer: any[];
	}
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
	categories: {
		necessary: {
			readOnly: true,
		},
		functionality: {},
		analytics: {
			services: {
				ga4: {
					label:
						'<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4 (dummy)</a>',
					onAccept: () => {
						window.dataLayer = window.dataLayer || [];

						function gtag(...args: any[]) {
							window.dataLayer.push(args);
						}

						gtag("js", new Date());
						gtag("config", "G-V9QPK6MZCX");
					},
					onReject: () => {},
					cookies: [
						{
							name: /^_ga/,
						},
					],
				},
				another: {
					label: "Another one (dummy)",
				},
			},
		},
	},
	language: {
		default: "en",
		autoDetect: "browser",
		translations: {
			en: {
				consentModal: {
					title: "We use cookies, including third party cookies",
					description:
						"These are for operational purposes, statistical analyses, to personalize your experience, provide you with targeted content tailored to your interests and to analyze the performance of our advertising campaigns. ",
					acceptAllBtn: "Accept all",
					acceptNecessaryBtn: "Reject all",
					showPreferencesBtn: "Personalize my choices",
					footer:
						'<a href="/privacy-policy">Privacy Policy</a>\n<a href="/terms-and-conditions">Terms and conditions</a>',
				},
				preferencesModal: {
					title: "Consent Preferences Center",
					acceptAllBtn: "Accept all",
					acceptNecessaryBtn: "Reject all",
					savePreferencesBtn: "Save preferences",
					closeIconLabel: "Close modal",
					serviceCounterLabel: "Service|Services",
					sections: [
						{
							title: "Cookie Usage",
							description:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						},
						{
							title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
							description:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
							linkedCategory: "necessary",
						},
						{
							title: "Functionality Cookies",
							description:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
							linkedCategory: "functionality",
						},
						{
							title: "Analytics Cookies",
							description:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
							linkedCategory: "analytics",
						},
						{
							title: "More information",
							description:
								'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
						},
					],
				},
			},
		},
	},
};
