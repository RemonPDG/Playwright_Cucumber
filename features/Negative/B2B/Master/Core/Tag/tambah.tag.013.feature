# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah013
Feature: Negative Menambah Master Tag (tambah.tag.013)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi semua data dengan benar dan saat save klik buttonnya 2x
    Given Login B2B berhasil (013)
    And Pergi ke menu Master (013)
    And Pergi ke menu Core (013)
    And Pergi ke menu Tag (013)
    When Muncul list tag (013)
    And Klik Create New (013)
    And Mengisi semua data dengan benar dan saat save klik buttonnya 2x (013)
    Then Klik Save, data tidak berhasil disimpan (013)