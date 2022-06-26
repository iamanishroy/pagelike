const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const isValidAgent = (agent) => {
    if (agent.isBot) {
        return false;
    }

    if (agent.isCurl) {
        return false;
    }

    if (agent.browser === 'PostmanRuntime' || agent.browser === 'axios') {
        return false;
    }

    if (agent.os === 'unknown') {
        return false;
    }

    if (agent.platform === 'unknown') {
        return false;
    }

    return true;
}

const validateAgent = function (req, res, next) {
    if (req.headers['Pass-Agent-Validation'] && !req.headers['validate-agent']) {
        return next();
    }
    const agent = req.useragent;
    if (!isValidAgent(agent) && !req.get('origin')) {
        return res.status(StatusCodes.FORBIDDEN).json({
            success: false,
            code: "FORBIDDEN",
            error: ReasonPhrases.FORBIDDEN,
            message: "Invalid User Agent"
        });
    }
    next();
}

module.exports = validateAgent;