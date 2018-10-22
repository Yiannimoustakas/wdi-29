class Bank

  attr_reader :name, :accounts
  # def name
  #   @name   # this method just returns the value of the @bank instance variable
  # end
  #
  # def accounts
  #   @accounts
  # end

  def initialize( name )
    @name = name
    @accounts = {}  # empty hash to score account names as keys, and balance as values
  end

  def create_account( account_name, starting_balance=0 )
    @accounts[account_name] = starting_balance
  end

  def deposit( account_name, amount )
    @accounts[account_name] += amount
  end

  def withdraw( account_name, amount )
    return unless @accounts[account_name] > amount
    @accounts[account_name] -= amount
  end

  def balance( account_name )
    @accounts[account_name]
  end


end
