function authMiddleware(req, res, next) {

     
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) { 
      return res.status(401).send('Access denied. No token provided. Please login to access this routes');
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Add user information to request object
      req.token = token; // Add token to request object
      next();
    } catch (error) {
      res.status(400).send('Invalid token.');
    }
}

export default function AuthCheckerMiddleware(req, res, next) {
    const excludedRoutes = ['/auth/login'];
  
    if (excludedRoutes.includes(req.path)) { 
      return next();
    } else { 
      return authMiddleware(req, res, next);
    }
}
