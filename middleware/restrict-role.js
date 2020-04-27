function restrictRole(role) {
	return (req, res, next) => {
		if (req.token && req.token.department.includes(role)) {
			next()
		} else if (req.token && req.token.department.includes('ADMIN')) {
      next()
    } else
			return res.status(403).json({
				message: "You are not allowed here",
			})
		}
}


module.exports = restrictRole
