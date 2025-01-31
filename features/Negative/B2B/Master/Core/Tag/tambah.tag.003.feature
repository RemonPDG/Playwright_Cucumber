# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah003
Feature: Negative Menambah Master Tag (tambah.tag.003)

  Scenario: Negative Menambahkan Tag Baru di Master Tag dengan Mengisi semua data ,Pada Tag Name diisi 300 karakter
    Given Login B2B berhasil - 003
    And Pergi ke menu Master - 003
    And Pergi ke menu Core - 003
    And Pergi ke menu Tag - 003
    When Muncul list tag - 003
    And Klik Create New - 003
    And Mengisi semua data ,Pada Tag Name diisi 300 karakter - 003
    Then Klik Save, data tidak berhasil disimpan - 003