<?php

declare(strict_types=1);

namespace Drupal\steepbase\Controller;

use Drupal\Core\Render\HtmlResponse;

/**
 * Controller for outputting HTML for the Steepbase module's UI.
 */
final class SteepbaseController {


  /**
   * The HTML for the Steepbase module's UI.
   */
  private const HTML = <<<HTML
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>Steepbase for Drupal</title>
</head>
<body>
  <div id="steepbase">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
      <div style="font-size: 48px; animation: pulse 1.5s ease-in-out infinite;">▣</div>
    </div>
    <style>
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.3); }
        100% { transform: scale(1); }
      }
    </style>
  </div>
</body>
</html>
HTML;

  /**
   * Displays the Steepbase UI.
   */
  public function __invoke() : HtmlResponse {
    return (new HtmlResponse(self::HTML))->setAttachments([
      'library' => [],
      'drupalSettings' => [
        'steepbase' => [],
      ],
    ]);
  }

}
