class AuthenticateService {
  static async user() {
    try {
      // add your authenticate method here

      return 'ABC';
    } catch (e) {
      throw new Error('Erro ao autenticar');
    }
  }
}

module.exports = AuthenticateService;