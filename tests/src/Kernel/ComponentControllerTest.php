<?php

declare(strict_types=1);

namespace Drupal\Tests\steepbase\Kernel;

use Drupal\steepbase\Controller\ComponentController;
use Drupal\KernelTests\KernelTestBase;

/**
 * Tests the /api/components endpoint.
 *
 * @group steepbase
 */
class ComponentControllerTest extends KernelTestBase {

  /**
   * {@inheritdoc}
   */
  protected static $modules = [
    'system',
    'steepbase',
    'sdc_test',
  ];

  /**
   * The component plugin manager.
   *
   * @var \Drupal\Core\Theme\ComponentPluginManager
   */
  protected $componentPluginManager;

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();
    $this->componentPluginManager = $this->container->get('plugin.manager.sdc');
  }

  /**
   * Tests that the endpoint returns the expected component definitions.
   */
  public function testGetDefinitions(): void {
    // Create an instance of our controller.
    $controller = new ComponentController(
      $this->componentPluginManager
    );

    $response = $controller->getDefinitions();
    $raw_content = $response->getContent();

    // First verify we can decode the JSON.
    $this->assertNotFalse($raw_content, 'Response content should not be false');
    $definitions = json_decode($raw_content, TRUE);
    $json_error = json_last_error();
    $this->assertEquals(JSON_ERROR_NONE, $json_error, 'Response contains valid JSON');
    $this->assertNotNull($definitions, 'Decoded JSON is not null');

    // Assert that we have the expected components from the `sdc_test` module.
    /** @var array<string, mixed> $definitions */
    $this->assertArrayHasKey('sdc_test:array-to-object', $definitions);
    $this->assertArrayHasKey('sdc_test:my-banner', $definitions);
    $this->assertArrayHasKey('sdc_test:my-button', $definitions);
    $this->assertArrayHasKey('sdc_test:my-cta', $definitions);
    $this->assertArrayHasKey('sdc_test:no-props', $definitions);

    // Verify the components are sorted alphabetically.
    $keys = array_keys($definitions);
    $sorted_keys = $keys;
    sort($sorted_keys);
    $this->assertEquals($sorted_keys, $keys, 'Components are sorted alphabetically');
  }

}
