<?php

include_once '../global.php';

/*
 * Get action to route to.
 */
$action = $_GET['action'];

$sc = new SiteController();
$sc->route($action);

/*
 * Class to control the site.
 */
class SiteController {
	/*
	 * Send not logged in user to login page.
	 */
	// public function checkLoginStatus() {
	// 	if (!LoginSession::currentUser()->canViewSite()) {
	// 		header('Location: ' . BASE_URL . '/login');
	// 		exit();
	// 	}
	// }

	/*
	 * Route to appropriate function.
	 */
	public function route($action) {
		switch($action) {
			case 'login':
				$this->checkLoginStatus();
				$this->home();
				break;
		}
	}

	/*
	 * Function to send the user to the home page.
	 */
	public function home() {
		$user = LoginSession::currentUser();
		$events = Event::getFeedEvents($user, 10);

		$pageName = 'Home';
		include_once SYSTEM_PATH.'/view/header.tpl';
		include_once SYSTEM_PATH.'/view/home.tpl';
		include_once SYSTEM_PATH.'/view/footer.tpl';
	}
}
