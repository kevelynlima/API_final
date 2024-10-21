import con from "./connection.js"; 

export async function inserirPagamento(pagamento) {
    const comando = `
    insert into Pagamento (Valor_Demandado, Forma_Pagamento, Data_Pagamento)
                        values (?, ?, ?)
    
    `; 

    let resposta = await con.query (comando, [pagamento.Valor_Demandado, pagamento.Forma_Pagamento, pagamento.Data_Pagamento])
    let info = resposta [0]; 

    return info.insertId; 
}

export async function consultarPacientes() {
    const comando = `
    select ID_Pagamento         ID,
        ID_Consulta             ID,
        Valor                   numero,
        Forma_Pagamento         numero,
        Data_Pagamento          data
    from Pagamento
    `; 


    let resposta = await con.query (comando); 
    let registros = resposta [0]; 

    return registros
}

export async function alterarFormaDePagamento(id, pagamento){
    const comando = `
        update Pagamento 
             ID_Pagamento = ?,         
             ID_Consulta = ?,        
             Valor = ?,        
             Forma_Pagamento ?,          
             Data_Pagamento = ?      
    `
    let resposta = await con.query(comando,[pagamento.Valor_Demandado, pagamento.Forma_Pagamento, pagamento.Data_Pagamento, id])
    let info = resposta [0]; 

    return info.affectedRows; 
}

export async function devendoPagamento(id){
    const comando = `
            delete from Pagamento
            where ID_Pagamento = ?
    `

    let resposta = await con.query (comando, [id]); 
    let info = resposta [0]; 

    return info.affectedRows; 
}