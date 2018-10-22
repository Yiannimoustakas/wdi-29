require_relative '../lib/bank'  # load in our actual bank app code

describe Bank do

  # This code will run before every example ('it' block), guaranteeing we have an
  # instance of the Bank class available to test in a variable called 'bank'
  let( :bank ){  Bank.new("GA Bank")  }

  describe ".new" do

    it "creates a new bank object" do
      expect( bank ).to_not be nil # ASSERT: do our assumptions match reality?
      # check that the thing we made is actually an instance of the Bank class
      expect( bank ).to be_a Bank
    end

    it "assigns a name to the bank" do
      expect( bank.name ).to eq "GA Bank"
    end

  end  # .new

  describe "#create_account" do

    it "creates an account for some particular person" do
      # ARRANGE/ACT: set up the thing we want to test
      bank.create_account( 'Craigsy', 200 )
      # ASSERT: check that the code does what we expect in response to our action
      expect( bank.accounts['Craigsy'] ).to eq 200
    end

    it "creates an account with a zero balance when no starting balance is specified" do
      bank.create_account( 'Craigsy' )
      expect( bank.accounts['Craigsy'] ).to eq 0
    end

  end #  #create_account

  describe "#deposit" do

    it "deposits the correct amount into the specified account" do
      bank.create_account( 'Craigsy', 100 )
      bank.deposit( 'Craigsy', 100 )

      expect( bank.accounts['Craigsy'] ).to eq 200
    end

  end #  #deposit

  describe "#withdraw" do

    it "withdraws the correct amount from the specified account" do
      bank.create_account( 'Jonesy', 100 )
      bank.withdraw( 'Jonesy', 50 )

      expect( bank.accounts['Jonesy'] ).to eq 50
    end

    it "ignores withdrawals that exceed the account balance" do
      bank.create_account( 'Davo', 100 )
      bank.withdraw( 'Davo', 150 )

      expect( bank.accounts['Davo'] ).to eq 100
    end

  end #  #withdraw

  describe "#balance" do

    it "returns the account balance for the specified account" do
      bank.create_account( "Mad Kimmy", 500 )

      expect( bank.balance("Mad Kimmy") ).to eq 500
    end

  end #  #balance

end
