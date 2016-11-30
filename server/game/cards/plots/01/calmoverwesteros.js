const PlotCard = require('../../../plotcard.js');

class CalmOverWesteros extends PlotCard {
    onReveal(player) {
        if(!this.inPlay || this.owner !== player) {
            return true;
        }

        this.game.promptWithMenu(player, this, {
            activePrompt: {
                menuTitle: 'Select a challenge type',
                buttons: [
                    { text: 'Military', command: 'menuButton', method: 'setChallengeType', arg: 'military' },
                    { text: 'Intrigue', command: 'menuButton', method: 'setChallengeType', arg: 'intrigue' },
                    { text: 'Power', command: 'menuButton', method: 'setChallengeType', arg: 'power' },
                    { text: 'Cancel', command: 'menuButton', method: 'cancelChallengeSelect' }
                ]
            },
            waitingPromptTitle: 'Waiting for opponent to use ' + this.name
        });

        return false;
    }

    cancelChallengeSelect(player) {
        this.game.addMessage('{0} cancels the effect of {1}', player, this);
        return true;
    }

    setChallengeType(player, challengeType) {
        this.challengeType = challengeType;
        this.game.addMessage('{0} uses {1} to reduce the claim value of {2} challenges by 1 this round', player, this, challengeType);
        return true;
    }

    modifyClaim(player, challengeType, claim) {
        if(!this.inPlay || player === this.owner || this.challengeType !== challengeType) {
            return claim;
        }

        return claim - 1;
    }
}

CalmOverWesteros.code = '01008';

module.exports = CalmOverWesteros;
