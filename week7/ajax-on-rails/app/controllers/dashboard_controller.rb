class DashboardController < ApplicationController

  def uptime
    @up = `uptime`

    render json: Post.all
    
  end

  def cpu_hog

    # headers['Access-Control-Allow-Origin'] = '*';

    # Run a command to get the process using the most CPU on the system,
    # capture the output, split on newline, and save the second line
    # into the variable 'hog'
    hog = `ps xr | head -n 2`.split("\n").second # [1]
    date = `date`
    @hog_output = hog

    json_response = {
      data: hog,
      currentDate: date,
      pointlessArray: [1,2,3,4]
    }

    respond_to do |format|
      format.html # do nothing, i.e. render the default template
      format.json { render json: json_response }
    end

  end

  def app
  end

end
