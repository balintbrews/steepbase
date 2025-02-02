<?php

declare(strict_types=1);

namespace Drupal\steepbase\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Core\Theme\ComponentPluginManager;

/**
 * Controller for working with SDCs.
 */
final class ComponentController extends ControllerBase implements ContainerInjectionInterface {

  public function __construct(
    private readonly ComponentPluginManager $componentPluginManager,
  ) {}

  /**
   * Returns SDC definitions.
   */
  public function getDefinitions(): JsonResponse {
    $definitions = $this->componentPluginManager->getDefinitions();
    ksort($definitions);

    return new JsonResponse($definitions);
  }

}
