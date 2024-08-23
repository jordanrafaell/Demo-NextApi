'use client'
import libs from '../utils/libs/libs.js'
import '../utils/import-css/style.js'
const { motion, Script, React } = libs


const Services = () => (
  <>
    <section className='Services'>
      <div className="container_services">
        <div className='container_card_services'>

          <div className="card_services">
            <motion.div className="container_text_card_services"
              initial={{ opacity: 0, x: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: 50 }}
              transition={{ duration: 3 }}
            >
              <h2>Autenticação Segura</h2>
              <p><strong>Código:</strong>Um exemplo de rota de login utilizando Express.js. Esta API valida as credenciais fornecidas e, caso sejam corretas, retorna um token de autenticação que pode ser usado para acessar outras áreas seguras do sistema.</p>
              <p><strong>Descrição:</strong>Garanta a segurança dos seus usuários com nossa API de autenticação, que oferece uma solução rápida e confiável para o controle de acesso em aplicações modernas.</p>
            </motion.div>
            <motion.div className="container_img_services"
              initial={{ opacity: 0, x: 0, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: -50 }}
              transition={{ duration: 3 }}
            >
              <img src="images/banners/api_1.png" alt="" />
            </motion.div>
          </div>

          <div className="card_services">
            <motion.div className="container_img_services"
              initial={{ opacity: 0, x: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: 50 }}
              transition={{ duration: 3 }}
            >
              <img src="images/banners/api_2.png" alt="" />
            </motion.div>
            <motion.div className="container_text_card_services"
              initial={{ opacity: 0, x: 0, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: -50 }}
              transition={{ duration: 3 }}
            >
              <h2>Gerenciamento de Estoque:</h2>
              <p><strong>Código:</strong>Uma API que gerencia o inventário, com rotas para listar os itens disponíveis e adicionar novos produtos. Mantém o controle do estoque atualizado, facilitando o gerenciamento de grandes volumes de itens.</p>
              <p><strong>Descrição:</strong>Mantenha seu estoque sob controle em tempo real, evitando rupturas ou excessos, com nossa API eficiente e de fácil integração para qualquer plataforma.</p>
            </motion.div>
          </div>

          <div className="card_services">
            <motion.div className="container_text_card_services"
              initial={{ opacity: 0, x: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: 50 }}
              transition={{ duration: 3 }}
            >
              <h2>Processamento de Pagamentos:</h2>
              <p><strong>Código:</strong>Uma API de processamento de pagamentos que valida o método de pagamento e processa a transação. Esta API garante que os pagamentos sejam realizados de forma segura e eficiente, suportando vários métodos de pagamento.</p>
              <p><strong>Descrição:</strong>Simplifique o processamento de pagamentos e melhore a experiência do cliente com nossa API que suporta múltiplos métodos, garantindo transações seguras e rápidas.</p>
            </motion.div>
            <motion.div className="container_img_services"
              initial={{ opacity: 0, x: 0, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: -50 }}
              transition={{ duration: 3 }}
            >
              <img src="images/banners/api_3.png" alt="" />
            </motion.div>
          </div>

          <div className="card_services">
            <motion.div className="container_img_services"
              initial={{ opacity: 0, x: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: 50 }}
              transition={{ duration: 3 }}
            >
              <img src="images/banners/api_4.png" alt="" />
            </motion.div>
            <motion.div className="container_text_card_services"
              initial={{ opacity: 0, x: 0, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: -50 }}
              transition={{ duration: 3 }}
            >
              <h2>Notificações por Email:</h2>
              <p><strong>Código:</strong>Uma API dedicada ao envio de notificações por email. Recebe os detalhes da mensagem por meio de uma requisição POST e realiza o envio do email. Ideal para manter seus usuários informados sobre atualizações e eventos.</p>
              <p><strong>Descrição:</strong>Automatize a comunicação com seus usuários através de nossa API de email, que facilita o envio de notificações personalizadas diretamente da sua aplicação, mantendo-os sempre informados.</p>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  </>
)

export default Services
