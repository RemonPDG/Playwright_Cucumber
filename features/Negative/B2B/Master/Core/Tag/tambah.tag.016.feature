# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah016
Feature: Negative Menambah Master Tag (tambah.tag.016)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi semua data textfield dengan emoji
    Given Login B2B berhasil - 016
    And Pergi ke menu Master - 016
    And Pergi ke menu Core - 016
    And Pergi ke menu Tag - 016
    When Muncul list tag - 016
    And Klik Create New - 016
    And Mengisi semua data textfield dengan emoji - 016
    Then Klik Save, data tidak berhasil disimpan - 016