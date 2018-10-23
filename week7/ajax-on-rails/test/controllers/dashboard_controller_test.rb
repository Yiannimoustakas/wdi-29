require 'test_helper'

class DashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get uptime" do
    get dashboard_uptime_url
    assert_response :success
  end

  test "should get cpu_hog" do
    get dashboard_cpu_hog_url
    assert_response :success
  end

  test "should get app" do
    get dashboard_app_url
    assert_response :success
  end

end
