var jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json('вы не авторизованы  от миддлвера')
  }

  const [type, token] = authorization.split(' ')

  if (type !== 'Bearer') {
    return res.status(401).json('Неверный тип токена')
  }

  try {
    req.user = await jwt.verify(token, process.env.SECRET_JWT_KEY) // пока у меня ничего не делает, чисто взята с тудушки
    if (!req.user) {
      return res.status(401).json('Неправильный токен от миддлвера')
    }
    next()
  } catch (error) {
    return res.status(401).json('ошибочный токен от миддлевера')
  }
}
