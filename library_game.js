"use strict";
const game = {
    player1: new Pig(),
    player2: new Pig(),
    currentPlayer: null,

    // check if the game object contains valid data...
    get isValid() {
        if (this.player1.name === "" || this.player2.name === "") {
            return false;
        } else {
            return true;
        }
    },

    // start a new game, passing in the player names
    start(name1, name2) {
        this.player1.name = name1;
        this.player2.name = name2;
        this.currentPlayer = this.player1;
        return this;
    },

    // switch the current player
    reset() {
        // call the reset() method on each of the player Pig objects
        this.player1.reset();
        this.player2.reset();
        this.currentPlayer = this.player1;
        return this;

    },

    // roll the dice and update the current player's turn
    changePlayer() {
        // determine whether player1 or player2 is the current player, then
        // update the currentPlayer property to hold the other player.
        this.currentPlayer = (this.currentPlayer === this.player1) ? this.player2 : this.player1;
        return this;
    },


    hold(score1, score2) {
        // call the hold() method of the current player
        this.currentPlayer.hold();

        // update that player's score with the current total
        if (this.currentPlayer === this.player1) {
            $("#score1").val(this.player1.total);
        } else {
            $("#score2").val(this.player2.total);
        }

        this.changePlayer();  // Change to the next player
        return this;

    },

    checkWinner() {
        // check the players' totals to see if either is at or above 100
        // points. If so, return that player's name. Otherwise, return 
        // the string "none".
        if (this.player1.total >= 100) {
            return this.player1.name;
        } else if (this.player2.total >= 100) {
            return this.player2.name;
        } else {
            return "none";
        }

    }
};